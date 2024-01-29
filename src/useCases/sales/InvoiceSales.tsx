import { useState, useEffect, useCallback } from "react";
import { InvoiceSalesForm } from '../../components/sales/InvoiceSalesForm';
import { BackHome } from "../../components/utils/backHome/BackHome";
import { TSale } from "../products/type/TypeProducts";
import { Globais } from "../../components/globais/Globais";
import api from "../../services/api/api";

import { TCeps, TCities } from "../persons/PersonRegister";
import { currencyFormat } from "../../components/utils/currentFormat/CurrentFormat";

export function InvoiceSales() {

    const apiUrl = Globais.API_URL;
    const apiUrlPerson = apiUrl + "/person_users/";

    const [ceps, setCeps] = useState<TCeps[]>([])
    const [cities, setCities] = useState<TCities[]>([])

    const [msg, setMsg] = useState<string>('')

    const [sum, setSum] = useState<number>(0)
    const [sales, setSales] = useState<TSale[]>([])
    const [itens, setItens] = useState<TSale[]>([]);
    const [sale, setSale] = useState<TSale>({
        filial: 0,
        user_id: 0,
        user: "",
        fk_name_pers: 0,
        name_pers: '',
        cpf_pers: '',
        address_pers: '',
        bairro_pers: '',
        fk_cep: 0,
        name_city:'',
        uf:'',
        num_cep:'',
        phone_pers: '',
        disc_sale: 0,
        tItens: 0,
        tNote: 0, paySale: 0,
        id:0,
        item:0,
        descric:'',
        amount:0,
        valor:0,
        tItem:0
    });

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setSale((values) => ({ ...values, [name]: value }))
    };

    const getSale = useCallback(async () => {
        const res = localStorage.getItem('u')
        if (res !== null) {
            const user = JSON.parse(res)
            const userLoggedId = user[0].id
            const userLoggedUsername = user[0].username
            try {
                await fetch(apiUrlPerson + userLoggedId)
                    .then(data => { return data.json() })
                    .then(persons => {
                        for (let i = 0; persons.length > i; i++) {
                            if (persons[i].fk_id_user === userLoggedId) {
                                sale.filial = persons[i].fk_name_filial;
                                sale.fk_name_pers = persons[i].id_person;
                                sale.name_pers = persons[i].name_pers;
                                sale.phone_pers = persons[i].phone_pers;
                                sale.bairro_pers = persons[i].bairro_pers;
                                sale.fk_cep = persons[i].fk_cep;
                                sale.cpf_pers = persons[i].cpf_pers;
                                sale.address_pers = persons[i].address_pers;
                                sale.user_id = userLoggedId;
                                sale.user = userLoggedUsername;
                                const resSum = localStorage.getItem('s');
                                if (resSum !== null) {
                                    const sum: number = JSON.parse(resSum);
                                    sale.tItens =sum;
                                    setSum(sum);
                                }
                                sale.tNote = sale.tItens - sale.disc_sale;
                                sale.paySale = sale.tNote
                                const resItens = localStorage.getItem('i');
                                if (resItens !== null) {
                                    const itens = JSON.parse(resItens);
                                    setItens(itens);
                                }
                            }
                        }
                        if (sale.fk_name_pers === 0) {
                            window.location.replace("/form_person");
                        }
                    })
            } catch (err) {
                console.log("error occurred !" + err);
            }
        }
    }, [sale]);
    useEffect(() => { getSale()}, [sale]);

    async function getCeps() {
        try {
            await api.get(`/ceps`)
                .then(response => { setCeps(response.data) })
        } catch (err) { alert("error occurred !!" + err) }
    };
    useEffect(() => { getCeps() }, [])

    async function getCities() {
        try {
            await api.get(`/cities`)
                .then(response => { setCities(response.data) })
        } catch (err) { alert("error occurred !!" + err) }
    };
    useEffect(() => { getCities() }, [])

    function setCep() {
        for (let i = 0; i < ceps.length; i++) {
            if (ceps[i].id_cep === sale.fk_cep) {
                sale.num_cep = ceps[i].num_cep
            }
        }
    };
    useEffect(() => { setCep() }, [ceps])

    function setCity() {
        for (let i = 0; i < cities.length; i++) {
            if (cities[i].id_city === sale.fk_cep) {
                sale.name_city = cities[i].name_city
                sale.uf = cities[i].uf
            }
        }
    };
    useEffect(() => { setCity() }, [cities])

    function payment() {
        if (itens !== null) {
            let payment = sale.paySale
            let totalNote = 0
            const limitDesc = (sale.disc_sale > sum * 0.10)
            totalNote += sum
            totalNote -= sale.disc_sale;
            if (limitDesc) {
                setMsg("Desconto não autorizado !")
            } else {
                if (totalNote === 0) {
                    setMsg("Nenhum item no momento !")
                } else {
                    if (payment == sale.tNote) {
                        setMsg("Valor á pagar " + currencyFormat(payment))
                        prepareSales();
                        setTimeout(() => {
                            localStorage.removeItem('i');
                            localStorage.removeItem('p');
                            localStorage.removeItem('c');
                            localStorage.removeItem('t');
                            localStorage.removeItem('s');
                            localStorage.removeItem('id');
                            window.location.replace("/direct_payment")
                        }, 4000);
                    } else {
                        setMsg("Valor diferente do total da nota ! "
                            + sale.paySale)
                    }
                }
            }
        } else {
            setMsg("Pedido já foi enviado ! ")
        }
    };

    function prepareSales() {
        if (sales.length === 0) {
            sales.push(sale)
            for (let i = 0; itens.length > i; i++) {
                sales.push(itens[i])
            }
            setSales(sales);
            localStorage.setItem("sl", JSON.stringify(sales))
        }
        else {
            setMsg("Pedido já foi enviado ! ")
        }
    };

    async function handleSubmit(e: Event) {
        e.preventDefault();
        payment()
    };

    return (
        <>
            <InvoiceSalesForm
                backHomeInvoice={<BackHome />}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                alert=""
                message={msg}
            >
                {sale}
            </InvoiceSalesForm>
        </>
    )
}