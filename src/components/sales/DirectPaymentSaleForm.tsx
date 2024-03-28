import { LogoIn } from '../utils/logoIn/LogoIn';
import './SaleForm.css'
type TDirectPaymentSaleForm = {
    bestPayment: any;
    paymentInfo: any;
    handleSubmit: any;
    totalPayable: any;
    totalPaid: any;
    messagesSucess: any;
    messagesPayment: string;
    paymentMethods: any;
    numNoteSale: any;
    backHomePayment?: any;
}

export function DirectPaymentSaleForm(props: TDirectPaymentSaleForm) {

    return (
            <div className="container-global">
                <div className="main-global">
                    <div className="main-global-form">
                        <LogoIn />
                        <p className='text-center'>{props.bestPayment ?
                        <>ESCOLHA A MELHOR FORMA PARA PAGAR</> : null}</p>
                        <>{props.backHomePayment}</>
                        <p className='text-center' >{props.paymentInfo ?
                        <a>Pagamento <b>localizado</b> o pedido será despachado</a> : null}</p>
                        <ul><li><strong>Cartões aceitos</strong></li></ul>
                        <img src="img/folder_pagbank.jpg" alt="Cartões aceitos"></img>
                        <ul>
                            {props.paymentMethods ? <span>
                                <li><b><strong>Chave PIX</strong></b>44988521033</li>
                                <li><b><strong>Chave PIX</strong></b>18069383000110</li>
                                <li><b><strong>PagSeguro</strong></b>Banco:290 AG:0001 Conta:10715966-7</li>
                                <li><b><strong>Contato Whats</strong></b>44 988521033</li>
                                <li><b><strong>Contato Email</strong></b>centroserra@gmail.com</li>
                            </span> : null}
                        </ul>
                        <div className='text-center'>{props.messagesPayment}</div>
                        <button className="btn btn-danger" onClick={props.handleSubmit}>Confirme o seu pagamento !!</button>
                        <a><b>{props.totalPayable}</b></a>
                        <label>{props.totalPaid}</label>
                        <label>{props.numNoteSale}</label>
                    </div>
                </div>
            </div>
    )
}