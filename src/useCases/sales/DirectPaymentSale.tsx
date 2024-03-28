import { useState, useEffect } from "react";
import { currencyFormat } from "../../components/utils/currentFormat/CurrentFormat";
import { DirectPaymentSaleForm } from "../../components/sales/DirectPaymentSaleForm"
import { TSale } from "../products/type/TypeProducts";
import { TPaymentPagSeguroPix as TDirectPayment, TQrcodePagSeguro as TPymentdirect } from "./type/TPagSeguro";
import { postRegister as registerSale } from "../../services/handleService";
import { BackHome } from "../../components/utils/backHome/BackHome";
import { ButtonOnClick } from "../../components/utils/btnOnClick/BtnOnClick";
import { Globais } from "../../components/globais/Globais";
import api from "../../services/api/api";

export function DirectPaymentSale() {

    const [flagdirectPaymentHandle, setFlagdirectPaymentHandle] = useState(true); /**Confirma somente 1 vez o pagamento */
    const [flagSales, setFlagSales] = useState<Boolean>(false); /**Emite a venda somente 1 vez */
    const [messagesSucess, SetMessagesSucess] = useState<string>('');
    const [messagesPayment, SetMessagesPayment] = useState<string>('');
    const [directPaymentHandle, setdirectPaymentHandle] = useState<TDirectPayment>(
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
    ); /**Set Pagto genérico */

    const [paymentdirect, setPaymnetdirect] = useState<TPymentdirect>(
        { "qr_codes": [{ "amount": { "value": 0 }, "expiration_date": "", "links": [{ "href": "" }] }] }
    ); /**retorno do payment */

    const [sale, setSale] = useState<TSale[]>([{
        filial: 0, user_id: 0, user: "", fk_name_pers: 0, name_pers: "",
        cpf_pers: "", address_pers: "", bairro_pers: '', fk_cep: 0,
        name_city: '', uf: '', num_cep: '', phone_pers: "",
        disc_sale: 0, tItens: 0, tNote: 0, paySale: 0,
        itens: [{ id: 0, item: 0, descric: "", amount: 0, valor: 0, tItem: 0 }]
    }]);

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

    function getDirectPayment(obj: any) {
        obj.reference_id = sale[0].user_id
        obj.description = "pagamento da nota"
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

    function getdirectPaymentHandle() {/** Primeira forma de pagamento genêrica */
        getDirectPayment(directPaymentHandle);
        arrayItems(directPaymentHandle);
        directPaymentHandle.qr_codes[0].amount.value = sale[0].paySale.toFixed(0).replace(/[.]/g, '')
        setdirectPaymentHandle(directPaymentHandle);
        setFlagdirectPaymentHandle(false);
        SetMessagesSucess('O valor pago sendo localizado os itens da sua compra serão liberados.')
        console.log(directPaymentHandle);
    }

    function sendSale() {
        if (paymentdirect.qr_codes[0].amount.value !== 0 &&
            flagSales === false) {
            registerSale(sale, 'sales');
            console.log(sale)
            setFlagSales(true)
        }
    };
    useEffect(() => {
        sendSale()
    }, [paymentdirect.qr_codes[0].amount.value]);

    async function registerdirectPaymentHandle() {
        await api.post<any>('/direct_payment', directPaymentHandle)
            .then(response => {
                setPaymnetdirect(response.data)
                setdirectPaymentHandle(response.data)
            }).catch(error => console.log(error))
    }; /** API payment genérica */

    function handleDirectPaymentSubmit() {
        if (flagdirectPaymentHandle === true) {
            if (sale[0].paySale !== 0) {
                getdirectPaymentHandle()
                registerdirectPaymentHandle()
                localStorage.removeItem('sl');
            } else {
                setFlagdirectPaymentHandle(true);
                SetMessagesPayment('Nada à pagar neste momento !');
            }
        }
        if (flagSales === true) { alert('Confirmado aguarde liberação !') }
    }

    const onClickHandleClosePayment = () => { window.location.assign('/logout'); }

    const numNote = directPaymentHandle.reference_id;

    return (
        <>
            <DirectPaymentSaleForm
                bestPayment={!flagSales}
                backHomePayment={messagesPayment !== "" ? <BackHome /> : ''}
                paymentInfo={!null}
                paymentMethods={!flagSales}
                messagesPayment={messagesPayment}
                handleSubmit={handleDirectPaymentSubmit}
                totalPayable={<>Total a pagar {currencyFormat(sale[0].paySale)}</>}
                totalPaid={<>{paymentdirect.qr_codes[0].amount.value !== 0 ?
                    'Pagamento de ' + currencyFormat(paymentdirect.qr_codes[0].amount.value) +
                    ' efetuado com sucesso !!' : 'Aguardando Pagamento'}</>}
                messagesSucess={!!flagSales ? <p>{messagesSucess}</p> : ''}
                numNoteSale={!!flagSales ? <a target="_blank" href={Globais.URL_NOTE + numNote}>
                    Clique aqui para gerar a sua nota de nº: {numNote}</a> : ''}
            />
            {!!flagSales ? <BackHome /> : ''}
            {!!flagSales ? <ButtonOnClick onClickHandle={onClickHandleClosePayment} text="Sair" /> : ''}
        </>
    )
}