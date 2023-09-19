import '../global-module.css'

type TPaymentSaleForm = {
    handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    handleCard:any
    handleBoleto:any
    handleQrCode:any
    children: any;
    qrcode_img: string
    payPix: string | number;
    payCartao: string | number;
    datavenc: Date | string | any
    setInt: any
    alert:string;
    message:string;
}
export function PaymentSaleForm({
    handleChange,
    handleCard,
    handleBoleto,
    handleQrCode,
    qrcode_img,
    payPix,
    payCartao,
    datavenc,
    setInt,
    children,
    alert,
    message }: TPaymentSaleForm) {
    return (
        <>
            <div className='container-global'>
                <div className='main-global'>
                        <form className='main-global-form' >
                        <strong>Pagamento da compra</strong>
                         <label>{alert}</label>
                         <label>{message}</label>
                        {/* <img src='./img/band_cartao_creditos.png'></img> */}
                            <input
                            type='hidden'
                            name='encryptedCard'
                            value={children.encryptedCard}
                            onChange={handleChange}
                            placeholder='encryptedCard'
                            required
                            mask-selectonfocus="true"
                            // maxLength={16}
                            />
                            <input
                            type='hidden'
                            name='publickey'
                            value={children.publicKey}
                            onChange={handleChange}
                            placeholder='publicKey'
                            required
                            mask-selectonfocus="true"
                            // maxLength={16}
                            />
                            <input
                            type='text'
                            name='holder'
                            value={children.holder}
                            onChange={handleChange}
                            placeholder='Nome no cartão*'
                            required
                            mask-selectonfocus="true"
                            // maxLength={16}
                            />
                            <input
                            type="text"
                            name='number'
                            value={children.number}
                            onChange={handleChange}
                            placeholder='numero do cartaõ*'
                            required
                            mask-selectonfocus="true"
                            maxLength={16}
                            />
                            <input
                            type="text"
                            name='expMonth'
                            value={children.expMonth}
                            onChange={handleChange}
                            placeholder='mês valídade*'
                            required
                            mask-selectonfocus="true"
                            maxLength={2}
                            />
                            <input
                            type='text'
                            name='expYear'
                            value={children.expYear}
                            onChange={handleChange}
                            placeholder='ano valídade*'
                            required
                            mask-selectonfocus="true"
                            maxLength={4}
                            />
                            <input
                            type='text'
                            name='securityCode'
                            value={children.securityCode}
                            onChange={handleChange}
                            placeholder='código CVV*'
                            mask-selectonfocus="true"
                            maxLength={3}
                            required
                            />
                            <button onClick={handleCard}>Cartão de crédito</button>
                            <p>Cartão {payCartao}</p>
                            <hr></hr>
                            <button onClick={handleBoleto}>Boleto bancário</button>
                            <p>venc. boleto</p>
                            <input
                            type="date" value={datavenc}
                            onChange={(e) => setInt(e.target.value)} />
                            <hr></hr>
                            <button onClick={handleQrCode}>Pague com PIX</button>
                            <img className='payment-sale-img-qrcode' src={qrcode_img}></img>
                        <p>PIX {payPix}</p>
                        <a href='###'>{'Mantenha seu cadastro atualizado'}</a>
                        </form >
                    </div>
                </div>
        </>
    )

}
