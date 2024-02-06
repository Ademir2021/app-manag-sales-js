import './SaleForm.css'
import '../global-module.css'

import { Thead } from '../dashboard/Thead';
import { Globais } from '../globais/Globais';
import { currencyFormat } from '../utils/currentFormat/CurrentFormat';

type TRegisterSaleForm = {
  children: string | number | readonly string[] | undefined | any;
  handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  handleSubmit: any;
  handleDelete: any;
  handleSaveUpdate: any;
  handleSearchItem: any;
  products: Array<object>;
  item: string | number;
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
  products,
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
            <div className='text-center'>
            </div>
            <label>{alert}</label>
            <label>{message}</label>
            <img src={item_img} alt={children.descric}></img>

            <p style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              {item}
            </p>

            <span style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              {currencyFormat(parseFloat(children.valor))}
            </span>

            <datalist id="data-itens">
              <select>{products.map((product:number|string|any) => (
                <option key={product.id_product}>
                  {product.descric_product}</option>))}
              </select>
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
            <strong
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
              }}>{totalItens}</strong>
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