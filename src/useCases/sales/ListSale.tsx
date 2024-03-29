import { useState, useContext} from "react";
import { FormatDate } from "../../components/utils/formatDate";
import { SalesList } from "../../components/sales/SaleList";
import api from '../../services/api/api'
import { BackHome } from "../../components/utils/backHome/BackHome";
import { InputSearch } from "../../components/inputSearch/InputSearch";
import { Waiting } from "../../components/utils/waiting/Waiting";
import { Globais } from "../../components/globais/Globais";
import { AuthContext } from '../../context/auth'
import { currencyFormat } from "../../components/utils/currentFormat/CurrentFormat";

type TSaleList = {
  id_sale: number;
  created_at: Date | any;
  fk_name_pers: number;
  val_rec: number;
  disc_sale: number;
  total_sale: number
};

export function ListSales() {

  const { user: isLogged }: any = useContext(AuthContext);
  
  const [sales, setSales] = useState<TSaleList[]>([]);
  const [created_int, setInt] = useState<Date | any>('')
  const [created_end, setEnd] = useState<Date | any>('')

  function searchSales(e:Event) {
    e.preventDefault()
    if(created_int.length &&
       created_end.length != ''){
    getSales()
    }else{
      alert("Preencha os 2 campo de datas !")
    }
  };

  const getSales = async () => {
    try {
      await api.get<TSaleList[]>(`/sales/${isLogged[0].id}`)
        .then(response => {
          const res: TSaleList[] = response.data
          let data_sale: TSaleList[] = []
          for (let i = 0; res.length > i; i++) {
            if (res[i].created_at >= created_int
              && res[i].created_at <= created_end) {
              data_sale.push((res[i]))
            }
          }
          setSales(data_sale)
        })
    } catch (err) {
      alert("error occurred !!: " + err);
    }
  };

  return (
    <>
      <BackHome />
      <InputSearch
        int={created_int}
        end={created_end}
        setInt={setInt}
        setEnd={setEnd}
        searchHandle={searchSales}
      />
      {sales.length === 0 ? <Waiting waiting={'Aguardando busca !'}/> : (
        sales.map((sale: TSaleList) => (
          <SalesList
            key={sale.id_sale}
            id={sale.id_sale}
            create={FormatDate(sale.created_at)}
            name={sale.fk_name_pers}
            total_prod={currencyFormat(sale.val_rec)}
            disc_sale={currencyFormat(sale.disc_sale)}
            total_note={currencyFormat(sale.total_sale)}
            issueNote={<a target="_blank"
            href={Globais.URL_NOTE + sale.id_sale}>Emitir a nota</a>}
          />
        )))}
  
    </>
  )
}