import './SaleForm.css'

type  TDirectPaymentSaleForm ={
    bestPayment:any;
    paymentInfo:any;
    handleSubmit:any;
    totalPayable:any;
    totalPaid: any;
    messagesSucess:any;
    PaymentMethods:any;
    numNoteSale:any;
}

export function DirectPaymentSaleForm(props:TDirectPaymentSaleForm){

return(
    <>
    <div className="container-global">
        <div className="main-global">
            <div className="main-global-form">
                <img className="tp-info" src="/img/tp_info.ico"></img>
                <span> Direct Payment - CENTRO INFORMÁTICA</span>
                <p className='text-center'>{props.bestPayment}</p>
                <a>{props.paymentInfo}</a>

                <hr></hr>

                <ul><li><a><b>Cartões aceitos - </b></a></li></ul>
                <img src="img/folder_pagbank.jpg" alt="Cartões aceitos"></img>
                <ul>{props.PaymentMethods}</ul>
                <button className="btn btn-danger"
                onClick={props.handleSubmit}>Confirme o seu pagamento !!</button>
                <a><b>{ props.totalPayable }</b></a>
                <label>{props.totalPaid}</label>
                <label>{props.numNoteSale}</label>
            </div>
        </div>
    </div>

</>
)
}