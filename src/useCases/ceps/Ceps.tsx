import { useState, useEffect } from "react";
import { CepsForm } from "../../components/ceps/CepsForm";
import { NavBar } from "../../components/navbar/Navbar";
import api from "../../services/api/api";
import { postRegister } from "../../services/handleService";

interface ICountries {
    id_country: number;
    name_country: string;
    acronym: number; //abreviação
    ddi: number;
    code_country: number //float code do País
    code_revenue: number;
    created_at?: Date;
};
interface ICities {
    id_city: number;
    name_city: string | undefined | any;
    uf: string;
    code_ibge: string;
    code_state_revenue: number;
    code_country: ICountries;
    created_at: Date;
    code_federal_revenue: number //float 
};
interface ICeps {
    id_cep?: number;
    num_cep: string;
    code_city: number;
    type_cep: string;
    public_place: string; //logradouro
    num_initial: Number
    num_final: number
    complement: string
    created_at?: Date
    city: string | undefined | any;
    uf: string;
};

export function Ceps() {

    const [selectedUf, setSelectedUf] = useState<string>("Selecione um Estado");
    const [selectedIdCity, setSelectedIdCity] = useState<any>(null);
    const [selectedNameCity, setSelectedNameCity] = useState<string | undefined>(undefined);
    const [cities, setCities] = useState<ICities[]>([])
    const [ceps, setCeps] = useState<ICeps[]>([])
    const [message, setMessage] = useState<string>("")
    const [alertCep, setAlertCep] = useState<string>("")
    const [cep, setCep] = useState<ICeps>({
        id_cep: 0,
        num_cep: "",
        code_city: 0,
        type_cep: "",
        public_place: "",
        num_initial: 0,
        num_final: 0,
        complement: "",
        city: "",
        uf: ""
    })

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setCep(values => ({ ...values, [name]: value }))
    };

    async function getCities() {
        try {
            await api.get(`/cities`)
                .then(response => {
                    const _cities: ICities[] = []
                    const res: ICities[] = response.data
                    for (let i = 0; res.length > i; i++) {
                        if (res[i].uf === selectedUf) {
                            setSelectedUf(selectedUf)
                            _cities.push(res[i])
                            setCities(_cities)
                        }
                    }
                })
        } catch (err) { alert("error occurred !!" + err) }
    };
    useEffect(() => { getCities() }, [selectedUf])

    async function getCeps() {
        try {
            await api.get(`ceps`)
                .then(response => { setCeps(response.data) })
        } catch (err) { alert("error occurred !!" + err) }
    };
    useEffect(() => { getCeps() }, [])

    function checkCepExist() {
        for (let i = 0; ceps.length > i; i++) {
            if (ceps[i].num_cep === cep.num_cep) {
                return true
            }
        }
        return false
    }

    const getOneCity = async () => {
        try {
            await api.get(`on_city/${selectedIdCity}`)
                .then(response => {
                    setSelectedNameCity(response.data.name_city)
                })
        } catch (err) {
            alert("error occurred !!: " + err);
        }
    }
    useEffect(() => { getOneCity() }, [selectedIdCity])

    function cepValFields(cep: ICeps) {
        let msg = ""
        if (cep.num_cep === "") { msg += "Digite um CEP válido ! _\n" };
        if (cep.public_place === "") { msg += "Digite seu Logradouro ! _ \n" };
        if (cep.type_cep === "") { msg += "Digite tipo de Cep ! _\n" };
        if (cep.num_initial === 0) { msg += "Digite num inicial ! _\n" };
        if (cep.num_final === 0) { msg += "Digite num final ! _\n" };
        if (cep.complement === "") { msg += "Digite um complemento ! _\n" };
        if (checkCepExist() === true) { msg += "Cep já existe ! _\n" };
        if (selectedUf === "Selecione um Estado") { msg += "Selecione um Estado ! _\n" };
        if (selectedNameCity === undefined) { msg += "Selecione uma Cidade\n" };
        if (msg !== "") {
            setMessage(msg)
            return false;
        };
        return true;
    };

    function handleSubmit(e: Event) {
        e.preventDefault()
        if (checkCepExist() === false) {
            setAlertCep("")
            if (cepValFields(cep)) {
                cep.uf = selectedUf
                cep.code_city = selectedIdCity
                cep.city = selectedNameCity
                postRegister(cep, 'ceps')
            }
        }else{setAlertCep("Cep já Existe")}
    }

    return (
        <>
            <NavBar />
            <CepsForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                listUf={<select onChange={e => setSelectedUf(e.target.value)}>
                    <option>{"Selecione um Estado"}</option>
                    <option>{"AC"}</option>
                    <option>{"AL"}</option>
                    <option>{"AP"}</option>
                    <option>{"AM"}</option>
                    <option>{"BA"}</option>
                    <option>{"CE"}</option>
                    <option>{"DF"}</option>
                    <option>{"ES"}</option>
                    <option>{"GO"}</option>
                    <option>{"MA"}</option>
                    <option>{"MT"}</option>
                    <option>{"MS"}</option>
                    <option>{"MG"}</option>
                    <option>{"PA"}</option>
                    <option>{"PB"}</option>
                    <option>{"PR"}</option>
                    <option>{"PE"}</option>
                    <option>{"PI"}</option>
                    <option>{"RJ"}</option>
                    <option>{"RN"}</option>
                    <option>{"RS"}</option>
                    <option>{"RO"}</option>
                    <option>{"RR"}</option>
                    <option>{"SC"}</option>
                    <option>{"SP"}</option>
                    <option>{"SE"}</option>
                    <option>{"TO"}</option>
                </select>}
                listCity={<select onChange={e => setSelectedIdCity(e.target.value)}>
                    /  <option>Escolha um Municipio</option>
                    {cities.map((city: ICities) => (
                        <option
                            key={city.id_city}
                            value={city.id_city}
                        >
                            {city.name_city}
                        </option>))}</select>}

                alertCep={alertCep}
                message={message}
            >
                {cep}
            </CepsForm>
        </>
    )
}