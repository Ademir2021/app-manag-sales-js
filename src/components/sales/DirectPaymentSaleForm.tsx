import { LogoIn } from '../utils/logoIn/LogoIn';
import './SaleForm.css'
type  TDirectPaymentSaleForm ={
    bestPayment:any;
    paymentInfo:any;
    handleSubmit:any;
    totalPayable:any;
    totalPaid: any;
    messagesSucess:any;
    messagesPayment:string;
    PaymentMethods:any;
    numNoteSale:any;
    backHomePayment?:any;
}

export function DirectPaymentSaleForm(props:TDirectPaymentSaleForm){

return(
    <>
    <div className="container-global">
        <div className="main-global">
            <div className="main-global-form">
                <LogoIn/>
                <p className='text-center'>{props.bestPayment}</p>
                <>{props.backHomePayment}</>
                <p className='text-center' >{props.paymentInfo}</p>
                <ul><li><strong>Cartões aceitos</strong></li></ul>
                <img src="img/folder_pagbank.jpg" alt="Cartões aceitos"></img>
                <ul>{props.PaymentMethods}</ul>
                <div className='text-center'>{props.messagesPayment}</div>
                <button className="btn btn-danger"onClick={props.handleSubmit}>Confirme o seu pagamento !!</button>
                <a><b>{ props.totalPayable }</b></a>
                <label>{props.totalPaid}</label>
                <label>{props.numNoteSale}</label>
            </div>
        </div>
    </div>

</>
)
}