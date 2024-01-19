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
          <p className='text-center'>FATURAR O PEDIDO</p>
           {/* <label>{alert}</label> */}
           {/* <label>{message}</label> */}
          <>{backHomeInvoice}</>
          <div className='text-center'>DADOS PARA EMISSÃO DA NOTA</div>
          <div><div></div><strong>Nome</strong><span>{children.name_pers}</span></div>
          <div><strong>Telefone</strong><span>{children.phone_pers}</span></div>
          <div><strong>CPF</strong><span>{children.cpf_pers}</span></div>
          <div><strong>Endereço</strong><span>{children.address_pers}</span></div>
          <div><strong>Bairro</strong><span>{children.bairro_pers}</span></div>
          <div><strong>Cidade</strong><span>{children.name_city}</span></div>
          <div><strong>Estado</strong><span>{children.uf}</span></div>
          <div><strong>Cep</strong><span>{children.num_cep}</span></div>
          <a href='/person_update'>Atualizar cadastro <b>clique-aqui</b></a>
          <hr></hr>
          <div className='text-center'>VALOR DA COMPRA</div>
          <div><strong>Subtotal</strong><span>{currencyFormat(children.tItens)}</span></div>
          <div><strong>Cupom de desconto</strong><span>{currencyFormat(children.disc_sale)}</span></div>
          <div><strong>Total da nota</strong><span>{currencyFormat(children.tNote)}</span></div>
          <div><strong>Valor a pagar</strong><span>{currencyFormat(children.paySale)}</span></div>
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
        </div>
      </div>
    </div>
  )
}