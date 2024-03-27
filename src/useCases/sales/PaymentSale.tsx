import { useState, useEffect } from "react";
import { PaymentSaleForm } from '../../components/sales/PaymentSaleForm';
import { currencyFormat } from "../../components/utils/currentFormat/CurrentFormat";
import { TSale } from "../products/type/TypeProducts";
import {
    TPaymentPagSeguroSaleCard, TPaymentPagSeguroPix, TQrcodePagSeguro,
    TPaymentPagSeguroBoleto, Tboleto, TPaymentPagSeguroCard
} from "./type/TPagSeguro";
import { postRegister as registerSale } from "../../services/handleService";
import { BackHome } from "../../components/utils/backHome/BackHome";
import { ButtonOnClick } from "../../components/utils/btnOnClick/BtnOnClick";
import api from "../../services/api/api";


export function PaymentSale() {

    const [flagQrCode, setFlagCode] = useState(true);
    const [flagBoleto, setFlagBoleto] = useState(true);
    const [flagCard, setFlagCard] = useState(true);

    const [flagSales, setFlagSales] = useState<Boolean>(false);
    const [messagesSucess, SetMessagesSucess] = useState<string>('');

    const [paymentPagSeguroSaleCard, setPaymentSaleCard] = useState<TPaymentPagSeguroSaleCard>(
        {
            "encryptedCard": "", "publicKey": "", "number": "4539620659922097",
            "expMonth": "11", "expYear": "2026", "securityCode": "123", "installments": 1,
            "holder": "Joao da Silva", "token": ""
        }
    );

    const [sale, setSale] = useState<TSale[]>([
        {
            "filial": 0, "user_id": 0, "user": "", "fk_name_pers": 0, "name_pers": "",
            "cpf_pers": "", "address_pers": "",
            "bairro_pers": '',
            "fk_cep": 0,
            "name_city": '',
            "uf": '',
            "num_cep": '',
            "phone_pers": "", "disc_sale": 0, "tItens": 0,
            "tNote": 0, "paySale": 0, itens: [{ "id": 0, "item": 0, "descric": "", "amount": 0, "valor": 0, "tItem": 0 }]
        }
    ]);

    const [paymentPagSeguroPix, setPaymentPagSeguroPix] = useState<TPaymentPagSeguroPix>(
        {
            "reference_id": "", "customer": {
                "name": "", "email": "", "tax_id": "", "phones": [{
                    "country": "",
                    "area": "", "number": "", "type": ""
                }]
            }, "items": [], "qr_codes": [{
                "amount": { "value": 0 }, "expiration_date": "",
                "links": [{ "href": "" }]
            }], "shipping": {
                "address": {
                    "street": "", "number": "", "complement": "", "locality": "",
                    "city": "", "region_code": "", "country": "", "postal_code": ""
                }
            }, "notification_urls": [""]
        }
    );

    const [qrcodePagSeguro, setQrcode] = useState<TQrcodePagSeguro>(
        { "qr_codes": [{ "amount": { "value": 0 }, "expiration_date": "", "links": [{ "href": "" }] }] }
    );

    const [paymentPagSeguroBoleto, setPaymentPagSeguroBoleto] = useState<TPaymentPagSeguroBoleto>(
        {
            "reference_id": "", "customer": {
                "name": "", "email": "", "tax_id": "", "phones": [{
                    "country": "", "area": "",
                    "number": "", "type": ""
                }]
            }, "items": [], "description": "", "amount": { "value": "", "currency": "" },
            "payment_method": {
                "type": "", "boleto": {
                    "due_date": "", "instruction_lines": { "line_1": "", "line_2": "" },
                    "holder": {
                        "name": "", "tax_id": "", "email": "", "address": {
                            "street": "", "number": "", "locality": "",
                            "city": "", "region": "", "region_code": "", "country": "", "postal_code": ""
                        }
                    }
                }
            },
            "shipping": {
                "address": {
                    "street": "", "number": "", "complement": "", "locality": "",
                    "city": "", "region_code": "", "country": "", "postal_code": ""
                }
            }, "notification_urls": [""]
        }
    );

    const [boletoPagSeguro, setBoletoPagSeguro] = useState<Tboleto>(
        { "links": [{ "href": "" }] }
    );

    if (boletoPagSeguro.links[0].href.length !== 0) {
        setTimeout(() => {
            window.location.replace(boletoPagSeguro.links[0].href);
        }, 1000);
    };

    const [paymentPagSeguroCard, setPaymentPagSeguroCard] = useState<TPaymentPagSeguroCard>(
        {
            "reference_id": "", "customer": {
                "name": "", "email": "", "tax_id": "",
                "phones": [{ "country": "", "area": "", "number": "", "type": "" }]
            },
            "items": [], "description": "", "amount": { "value": 0, "currency": "" },
            "payment_method": {
                "type": "", "installments": 0, "capture": true, "soft_descriptor": "",
                "card": {
                    "encrypted": "", "number": "", "exp_month": "", "exp_year": "", "security_code": "",
                    "holder": { "name": "" }
                }
            }, "store": true, "shipping": {
                "address": {
                    "street": "", "number": "", "complement": "",
                    "locality": "", "city": "", "region_code": "", "country": "", "postal_code": ""
                }
            }, "notification_urls": [""]
        }
    );

    const [cardPagSeguro, setcardPagSeguro] = useState(
        { "amount": { "value": 0, "currency": "real", "summary": { "total": 0, "paid": 0, "refunded": 0 } } }
    );

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setPaymentSaleCard(values => ({ ...values, [name]: value }))
    };

    const getSale = () => {
        const sale_store_res = localStorage.getItem('sl');
        if (sale_store_res !== null) {
            const sales = JSON.parse(sale_store_res)
            setSale(sales)
        }
    };
    useEffect(() => {
        getSale()
    }, []);

    function arrayItems(obj: any) {
        for (let i = 1; sale.length > i; i++) {
            const items = { name: '', quantity: 0, unit_amount: 0 }
            items.name = sale[0].itens[0].descric[i]
            items.quantity = sale[0].itens[0].amount[i]
            items.unit_amount = sale[0].itens[0].valor[i].replace(/[.]/g, '')
            obj.items.push(items)
        }
    };

    function getPaymentPagSeguro(obj: any) {
        obj.reference_id = sale[0].user_id
        obj.description = "Motivo do pagamento"
        obj.customer.name = sale[0].name_pers
        obj.customer.email = sale[0].user
        obj.customer.tax_id = sale[0].cpf_pers
        obj.customer.phones[0].number = sale[0].phone_pers.substring(2)
        obj.customer.phones[0].country = '55'
        obj.customer.phones[0].area = sale[0].phone_pers.slice(0, -9);
        obj.customer.phones[0].type = null
        obj.shipping.address.street = sale[0].address_pers
        obj.shipping.address.number = null
        obj.shipping.address.complement = null
        obj.shipping.address.locality = sale[0].bairro_pers
        obj.shipping.address.city = sale[0].name_city
        obj.shipping.address.region_code = sale[0].uf
        obj.shipping.address.country = 'BRA'
        obj.shipping.address.postal_code = sale[0].num_cep
    };

    function getPaymentPagSeguroPix() {
        let time = new Date();
        let expiration_date_qrcode = new Date();
        expiration_date_qrcode.setHours(time.getHours() + 48);
        arrayItems(paymentPagSeguroPix)
        getPaymentPagSeguro(paymentPagSeguroPix)
        paymentPagSeguroPix.qr_codes[0].amount.value = sale[0].paySale.toFixed(0).replace(/[.]/g, '')
        paymentPagSeguroPix.qr_codes[0].expiration_date = expiration_date_qrcode
        paymentPagSeguroPix.notification_urls = ["https://meusite.com/notificacoes"]
        setPaymentPagSeguroPix(paymentPagSeguroPix)
        SetMessagesSucess('O valor do PIX sendo confirmado seu pedido será entregue.')
        // console.log(paymentPagSeguroPix)
        // setFlagCode(false)
    };

    const [getboletoDueDate, setboletoDueDate] = useState(new Date());
    function boletoDueDate() {
        const data = new Date(getboletoDueDate),
            day = (data.getDate() + 1).toString().padStart(2, '0'),
            month = (data.getMonth() + 1).toString().padStart(2, '0'),
            year = data.getFullYear();
        return year + "-" + month + "-" + day;
    }

    function getPaymentPagSeguroBoleto() {
        arrayItems(paymentPagSeguroBoleto)
        getPaymentPagSeguro(paymentPagSeguroBoleto)
        paymentPagSeguroBoleto.amount.value = sale[0].paySale.toFixed(2).replace(/[.]/g, '')
        paymentPagSeguroBoleto.amount.currency = "BRL"
        paymentPagSeguroBoleto.payment_method.type = "BOLETO"
        paymentPagSeguroBoleto.payment_method.boleto.due_date = boletoDueDate()
        paymentPagSeguroBoleto.payment_method.boleto.instruction_lines.line_1 = "Pagamento processado para DESC Fatura"
        paymentPagSeguroBoleto.payment_method.boleto.instruction_lines.line_2 = "Via PagSeguro"
        paymentPagSeguroBoleto.payment_method.boleto.holder.name = sale[0].name_pers
        paymentPagSeguroBoleto.payment_method.boleto.holder.tax_id = sale[0].cpf_pers
        paymentPagSeguroBoleto.payment_method.boleto.holder.email = sale[0].user
        paymentPagSeguroBoleto.payment_method.boleto.holder.address.street = sale[0].address_pers
        paymentPagSeguroBoleto.payment_method.boleto.holder.address.number = '1384'
        paymentPagSeguroBoleto.payment_method.boleto.holder.address.locality = 'Centro'
        paymentPagSeguroBoleto.payment_method.boleto.holder.address.city = "Barbosa Ferraz"
        paymentPagSeguroBoleto.payment_method.boleto.holder.address.region = "PR"
        paymentPagSeguroBoleto.payment_method.boleto.holder.address.region_code = "PR"
        paymentPagSeguroBoleto.payment_method.boleto.holder.address.country = "BRA"
        paymentPagSeguroBoleto.payment_method.boleto.holder.address.postal_code = "86960000"
        paymentPagSeguroBoleto.notification_urls = ["https://yourserver.com/nas_ecommerce/277be731-3b7c-4dac-8c4e-4c3f4a1fdc46/"]
        setPaymentPagSeguroBoleto(paymentPagSeguroBoleto)
        SetMessagesSucess('Aguardando pagto do Boleto')
        // console.log(paymentPagSeguroBoleto)
        // setFlagBoleto(false)
    };

    // const card = PagSeguro.encryptCard({
    //     publicKey: "MINHA_CHAVE_PUBLICA",
    //     holder: "Nome Sobrenome",
    //     number: "4242424242424242",
    //     expMonth: "12",
    //     expYear: "2030",
    //     securityCode: "123"
    //   });

    //   const encrypted = card.encryptedCard;
    //   const hasErrors = card.hasErrors;
    //   const errors = card.errors;


    function encryptCard() {
        setPaymentSaleCard(paymentPagSeguroSaleCard); //Ecriptar estes dados sensiveis
        /**Estes dados poderão ser criptografados */
        paymentPagSeguroCard.payment_method.card.number = paymentPagSeguroSaleCard.number
        paymentPagSeguroCard.payment_method.card.exp_month = paymentPagSeguroSaleCard.expMonth
        paymentPagSeguroCard.payment_method.card.exp_year = paymentPagSeguroSaleCard.expYear
        paymentPagSeguroCard.payment_method.card.security_code = paymentPagSeguroSaleCard.securityCode
        paymentPagSeguroCard.payment_method.card.holder.name = paymentPagSeguroSaleCard.holder
    }

    function getPaymentPagSegurocard() {
        arrayItems(paymentPagSeguroCard)
        getPaymentPagSeguro(paymentPagSeguroCard)
        paymentPagSeguroCard.amount.value = sale[0].paySale.toFixed(2).replace(/[.]/g, '')
        paymentPagSeguroCard.amount.currency = 'BRL'
        paymentPagSeguroCard.payment_method.type = 'CREDIT_CARD'
        paymentPagSeguroCard.payment_method.capture = true
        encryptCard();
        paymentPagSeguroCard.payment_method.installments = 1
        paymentPagSeguroCard.payment_method.soft_descriptor = 'MyStore'
        paymentPagSeguroCard.payment_method.card.encrypted = 'no encrypted';
        paymentPagSeguroCard.notification_urls = ['https://yourserver.com/nas_ecommerce/277be731-3b7c-4dac-8c4e-4c3f4a1fdc46/']
        setPaymentPagSeguroCard(paymentPagSeguroCard)
        SetMessagesSucess('Aguardando Liberação do Cartão')
        console.log(paymentPagSeguroCard)
        // setFlagCard(false)
    };

    function sendSale() {
        if (qrcodePagSeguro.qr_codes[0].amount.value ||
            boletoPagSeguro.links[0].href ||
            cardPagSeguro.amount.summary.total !== 0 &&
            flagSales === false) {
            // registerSale(sale, 'sales');
            setFlagSales(true)
        }
    };
    useEffect(() => {
        sendSale()
    }, [qrcodePagSeguro.qr_codes[0].amount.value,
    cardPagSeguro.amount.summary.total,
    boletoPagSeguro.links[0].href]);

    async function registerPaymentPagSeguroPix() {
        await api.post<any>('/pix', paymentPagSeguroPix)
            .then(response => {
                setQrcode(response.data)
            }).catch(error => console.log(error))
    };

    async function registerPaymentPagSeguroBoleto() {
        await api.post('/boleto', paymentPagSeguroBoleto)
            .then(response => {
                setBoletoPagSeguro(response.data)
            }).catch(error => console.log(error))
    };

    async function registerPaymentPagSeguroCard() {
        await api.post('/card', paymentPagSeguroCard)
            .then(response => {
                // setcardPagSeguro(response.data) //erro ainda não está recebendo retorno
            }).catch(error => console.log(error))
    };

    const getpublicKeyPagSeguro = async () => {
        try {
            await api.get('publickey')
                .then(response => {
                    const publicKey = response.data
                    paymentPagSeguroSaleCard.publicKey = publicKey.public_key
                    getPaymentPagSegurocard()
                })
        } catch (err) {
            alert("error occurred !!" + err)
        }
    };
    useEffect(() => {
        getpublicKeyPagSeguro()
    }, [])

    function handleCard(e: Event) {
        e.preventDefault()
        if (flagCard === true) {
            getpublicKeyPagSeguro() //token
            getPaymentPagSegurocard()
            registerPaymentPagSeguroCard()
            // setFlagCard(false)
        }
    };

    function handleQrCode(e: Event) {
        e.preventDefault()
        if (flagQrCode === true) {
            getPaymentPagSeguroPix()
            registerPaymentPagSeguroPix()
        }
    };

    function handleBoleto(e: Event) {
        e.preventDefault()
        if (window.confirm(" sua tela será redirecionada para o boleto de pagamento? ")) {
            if (flagBoleto === true) {
                getPaymentPagSeguroBoleto()
                registerPaymentPagSeguroBoleto()
                setBoletoPagSeguro(boletoPagSeguro)
            }
        }
    };

    const onClickHandle = () => { window.location.assign('/logout'); }

    return (
        <>  {!flagSales ? <strong style={{
            marginTop: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: ""
        }}>Escolha sua melhor forma de pagamento</strong> : ''}
            <hr></hr>
            <PaymentSaleForm
                handleChange={handleChange}
                handleCard={handleCard}
                handleBoleto={handleBoleto}
                handleQrCode={handleQrCode}
                qrcode_img={qrcodePagSeguro.qr_codes[0].links[0].href}
                payPix={qrcodePagSeguro.qr_codes[0].amount.value !== 0 ?
                    currencyFormat(qrcodePagSeguro.qr_codes[0].amount.value) : 'R$ 0,00'}
                payCartao={cardPagSeguro.amount.summary.total !== 0 ?
                    cardPagSeguro.amount.summary.total : "R$ 0,00"}
                datavenc={getboletoDueDate}
                setInt={setboletoDueDate}
                alert=""
                message=""
            >
                {paymentPagSeguroSaleCard}
            </PaymentSaleForm>
            {!!flagSales ? <p style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: "red"
            }}>{messagesSucess}</p> : ''}
            {!!flagSales ? <BackHome /> : ''}
            {!!flagSales ? <ButtonOnClick onClickHandle={onClickHandle} text="Sair" /> : ''}
        </>
    )
}