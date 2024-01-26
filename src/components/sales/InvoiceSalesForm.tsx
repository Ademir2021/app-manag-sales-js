import { currencyFormat } from '../utils/currentFormat/CurrentFormat';

import '../global-module.css'
import { LogoIn } from '../utils/logoIn/LogoIn';

type TInvoiceSalesForm = {
  children: string | number | readonly string[] | undefined | any;
  handleChange: any;
  handleSubmit: any;
  loadItens?: any;
  alert: string
  message: string;
  backHomeInvoice:any;
}

export function InvoiceSalesForm({
  handleChange,
  handleSubmit,
  children,
  loadItens,
  alert,
  message,
  backHomeInvoice
}: TInvoiceSalesForm) {

  return (
    <div className="container-global" >
      <div className="main-global">
        <div className='main-global-form'>
          <LogoIn/>
           {/* <label>{alert}</label> */}
          <>{backHomeInvoice}</>
          <ul>
          <b>Faturar o seu Pedido</b>
          <li><b>Nome</b> {children.name_pers}</li>
          <li><b>Telefone</b> {children.phone_pers}</li>
          <li><b>CPF</b> {children.cpf_pers}</li>
          <li><b>Endereço</b> {children.address_pers}</li>
          <li><b>Bairro</b> {children.bairro_pers}</li>
          <li><b>Cidade</b> {children.name_city}</li>
          <li><b>Estado</b> {children.uf}</li>
          <li><b>Cep</b> {children.num_cep}</li>
          <a href='/person_update'><b>Atualizar cadastro</b></a>
          <li><b>Subtotal</b> {currencyFormat(children.tItens)}</li>
          <li><b>Cupom de desconto</b> {currencyFormat(children.disc_sale)}</li>
          <li><b>Total da nota</b> {currencyFormat(children.tNote)}</li>
          <li><b>Valor a pagar</b> {currencyFormat(children.paySale)}</li>
          </ul>
          <span>{message}</span>
          <input
            type='number'
            name="disc_sale"
            value={currencyFormat(children.disc_sale) || ''}
            placeholder='cupom de Desconto'
            required
            onChange={handleChange}
          />
          <input
            type='text'
            name="paySale"
            value={currencyFormat(children.tNote)}
            placeholder="pagamento"
            required
            disabled
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Próximo passo - Pagamento</button>
          <a href='###'>{'Mantenha seu cadastro atualizado'}</a>
          <span className='load-list-itens' >{loadItens}</span>
        </div>
      </div>
    </div>
  )
}