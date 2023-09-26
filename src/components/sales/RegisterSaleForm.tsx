import './SaleForm.css'

import { Thead } from '../dashboard/Thead';
import { BackHome } from '../utils/backHome/BackHome';

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
      <div className="container-sale">
        <div className="main-sale">
          <form className='main-sale-register' >
            <BackHome />
            <span className='text-center'>centroInfo Store - <b> ( Terminal de Vendas )</b></span>
            <label>{alert}</label>
            <label>{message}</label>
            <img src={item_img} alt={children.descric}></img>
            <label >{item}</label>
            <datalist id="data-itens">
              {list}
            </datalist>
            <input 
              type="search"
              list="data-itens"
              name="descric"
              value={children.descric}
              placeholder='Digite um produto ou codigo de barras'
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
            <label>{totalItens}</label>
            <button onClick={handleSaveUpdate}>{statusBtnSaveUpdate}</button>
            <button onClick={handleSubmit}>{statusBtnSaleSubmit}</button>
            <button onClick={handleDelete}>Deletar Item</button>
            <button onClick={handleSearchItem}>( Buscar Item ) / ( Importar pedido )</button>
            <a href='###'>{'Terminal de Vendas for PC e Smartphones.'}</a>
          </form>
  
        </div>
      </div>
      <Thead />
      <span>{loadItens}</span>
    </>
  );
}