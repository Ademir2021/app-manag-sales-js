import './SaleForm.css'
import '../global-module.css'

import { Thead } from '../dashboard/Thead';
import { Globais } from '../globais/Globais';


type TRegisterSaleForm = {
  children: string | number | readonly string[] | undefined | any;
  handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined | any;
  handleDelete: any;
  handleSaveUpdate: any;
  handleSearchItem: any;
  list: HTMLSelectElement | HTMLOptionElement | any;
  item: any
  statusBtnSaveUpdate: "Salvar Item" | "Atualizar Item";
  statusBtnSaleSubmit: "Iniciar Pedido" | "Faturar Pedido";
  loadItens: string | any;
  totalItens: number | string;
  item_img: string;
  alert: string;
  message: string
}

export function RegisterSaleForm({
  handleChange,
  handleSubmit,
  children,
  handleDelete,
  handleSaveUpdate,
  handleSearchItem,
  list,
  item,
  statusBtnSaveUpdate,
  statusBtnSaleSubmit,
  loadItens,
  totalItens,
  item_img,
  alert,
  message
}: TRegisterSaleForm) {

  return (
    <>
      <p></p>
      <div className="container-sale">
        <div className="main-sale">
          <form className='main-sale-register' >
            <div className='text-center'>
            </div>
            <label>{alert}</label>
            <label>{message}</label>
            <img src={item_img} alt={children.descric}></img>
            <p style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
            }}>{item}</p>
            <datalist id="data-itens">
              {list}
            </datalist>
            <input
              type="search"
              list="data-itens"
              name="descric"
              value={children.descric}
              placeholder='Digite um produto ou código de barras'
              required
              onChange={handleChange}
            />
            <input
              type="number"
              name="amount"
              min='1'
              max='99'
              value={children.amount}
              placeholder='Quantidade'
              onChange={handleChange}
              required
            />
            <p style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
            }}><b>{totalItens}</b></p>
            <button onClick={handleSaveUpdate}>{statusBtnSaveUpdate}</button>
            <button onClick={handleSubmit}>{statusBtnSaleSubmit}</button>
            <button onClick={handleDelete}>Deletar Item</button>
            <button onClick={handleSearchItem}>Buscar Item / Importar Carrinho</button>
            <div>
              <a href='###'><b>{Globais.title}</b></a>
              <a href='###'>{Globais.URL}</a>
              <a href='/dashboardefault'><b>Sair</b></a>
            </div>
          </form>

        </div>
      </div>
      <Thead />
      <span>{loadItens}</span>
    </>
  );
}