import { useState, useEffect, useCallback } from "react";
import { InvoiceSalesForm } from '../../components/sales/InvoiceSalesForm';
import { BackHome } from "../../components/utils/backHome/BackHome";
import { TSale } from "../products/type/TypeProducts";
import { Globais } from "../../components/globais/Globais";

export function InvoiceSales() {

    const apiUrl = Globais.API_URL;
    const apiUrlPerson = apiUrl + "/person_users/";

    const [sum, setSum] = useState<number>(0)
    const [sales, setSales] = useState<TSale[]>([])
    const [itens, setItens] = useState<TSale[]>([]);
    const [sale, setSale] = useState<TSale>({
        filial: 0, user_id: 0, user: "", fk_name_pers: 0,
        name_pers: "", cpf_pers: '', address_pers: '',
        phone_pers: '', disc_sale: 0, tItens: 0, tNote: 0, paySale: 0,
        id:0, item:0, descric:'',amount:0,valor:0, tItem:0
    });

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setSale((values) => ({ ...values, [name]: value }))
    };

    const getSale = useCallback(async () => {
        const res = localStorage.getItem('u')
        if (res !== null) {
            const user = JSON.parse(res)
            const userLoggedId = user[0].id
            const userLoggedUsername = user[0].username
            try {
                await fetch(apiUrlPerson + userLoggedId)
                    .then(data => { return data.json() })
                    .then(persons => {
                        for (let i = 0; persons.length > i; i++) {
                            if (persons[i].fk_id_user === userLoggedId) {
                                sale.filial = persons[i].fk_name_filial;
                                sale.fk_name_pers = persons[i].id_person;
                                sale.name_pers = persons[i].name_pers;
                                sale.phone_pers = persons[i].phone_pers;
                                sale.cpf_pers = persons[i].cpf_pers;
                                sale.address_pers = persons[i].address_pers;
                                sale.user_id = userLoggedId;
                                sale.user = userLoggedUsername;
                                const resSum = localStorage.getItem('s');
                                if (resSum !== null) {
                                    const sum: number = JSON.parse(resSum);
                                    sale.tItens = sum;
                                    setSum(sum);
                                }
                                sale.tNote = sale.tItens - sale.disc_sale;
                                sale.paySale = sale.tNote
                                const resItens = localStorage.getItem('i');
                                if (resItens !== null) {
                                    const itens = JSON.parse(resItens);
                                    setItens(itens);
                                }
                            }
                        }
                        if (sale.fk_name_pers === 0) {
                            window.location.replace("/form_person");
                        }
                    })
            } catch (err) {
                console.log("error occurred !" + err);
            }
        }
    }, [sale]);

    useEffect(() => {
        getSale();
    }, [sale]);

    function payment() {
        if (itens !== null) {
            let payment = sale.paySale
            let totalNote = 0
            const limitDesc = (sale.disc_sale > sum * 0.10)
            totalNote += sum
            totalNote -= sale.disc_sale;
            if (limitDesc) {
                alert("Desconto não autorizado")
            } else {
                if (totalNote === 0) {
                    alert("Nenhum item(s) no momento !!")
                    console.log(sales)
                } else {
                    if (payment == sale.tNote) {
                        alert("Valor á pagar: R$ " + payment)
                        prepareSales();
                        console.log(sales)
                        setTimeout(() => {
                            localStorage.removeItem('i');
                            localStorage.removeItem('p');
                            localStorage.removeItem('c');
                            localStorage.removeItem('t');
                            localStorage.removeItem('s');
                            localStorage.removeItem('id');
                            window.location.replace("/direct_payment")
                        }, 3000);
                    } else {
                        alert("Valor diferente do total da nota ! "
                            + sale.paySale)
                    }
                }
            }
        } else {
            alert("Pedido já foi enviado ! ")
        }
    };

    function prepareSales() {
        if (sales.length === 0) {
            sales.push(sale)
            for (let i = 0; itens.length > i; i++) {
                sales.push(itens[i])
            }
            setSales(sales);
            localStorage.setItem("sl", JSON.stringify(sales))
        }
        else {
            alert("Pedido já foi enviado ! ")
        }
    };

    async function handleSubmit(e: Event) {
        e.preventDefault();
        payment()
    };

    return (
        <>
            <BackHome />
            <InvoiceSalesForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                alert=""
                message=""
            >
                {sale}
            </InvoiceSalesForm>
        </>
    )
}