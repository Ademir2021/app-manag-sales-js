import { currencyFormat } from '../utils/currentFormat/CurrentFormat';

import '../global-module.css'

type TInvoiceSalesForm = {
  children: string | number | readonly string[] | undefined | any;
  handleChange: any;
  handleSubmit: any;
  loadItens?: any;
  alert: string
  message: string;
}

export function InvoiceSalesForm({
  handleChange,
  handleSubmit,
  children,
  loadItens,
  alert,
  message
}: TInvoiceSalesForm) {

  return (
    <div className="container-global" >
      <div className="main-global">
        <form className='main-global-form'>
          <h1>Faturar o pedido.</h1><hr></hr>
          <label>{alert}</label>
          <label>{message}</label><br />
          <strong>Dados da entrega e emissão da nota :</strong>
          <div><strong>Nome do cliente</strong><span>{children.name_pers}</span></div>
          <div><strong>Contato do cliente</strong><span>{children.phone_pers}</span></div>
          <div><strong>CPF do cliente</strong><span>{children.cpf_pers}</span></div>
          <div><strong>Endereço do cliente</strong><span>{children.address_pers}</span></div><br />
          <button className="btn btn-primary"><a href={'/person_update'}>Atualizar cadastro</a></button>
          <hr />
          <strong>Valores na nota :</strong>
          <div><strong>SubTotal</strong><span>{currencyFormat(children.tItens)}</span></div>
          <div><strong>Cupom de desconto</strong><span>{currencyFormat(children.disc_sale)}</span></div>
          <div><strong>Total da nota</strong><span>{currencyFormat(children.tNote)}</span></div>
          <div><strong>Valor a pagar</strong><span>{currencyFormat(children.paySale)}</span></div><br></br>
          <input
            type='text'
            name="disc_sale"
            value={children.disc_sale || ''}
            placeholder='cupom de Desconto'
            required
            onChange={handleChange}
          />
          <input
            type='text'
            name="paySale"
            value={children.tNote}
            placeholder="pagamento"
            required
            disabled
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Próximo passo: Pagamento</button>
          <a href='###'>{'Mantenha seu cadastro atualizado'}</a>
          <span className='load-list-itens' >{loadItens}</span>
        </form>
      </div>
    </div>
  )
}