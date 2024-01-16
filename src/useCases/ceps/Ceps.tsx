import { useState } from "react";
import { CepsForm } from "../../components/ceps/CepsForm";
import { NavBar } from "../../components/navbar/Navbar";

interface ICountries {
    id_country: number;
    name_country: string;
    acronym: number; //abreviação
    ddi: number;
    code_country: number //float code do País
    code_revenue: number;
    created_at: Date;
};
interface ICities {
    id_city: number;
    name_city: string;
    uf: string;
    code_ibge: string;
    code_state_revenue: number;
    code_country: ICountries;
    created_at: Date;
    code_federal_revenue: number //float 
};
interface ICeps {
    id_cep: number;
    num_cep: string;
    code_city: number;
    type_cep: string;
    public_place: string; //logradouro
    num_initial: Number
    num_final: number
    complement: string
    created_at: Date
    city: string;
    uf: string;
};

export function Ceps() {

    const [ceps, setCeps] = useState<ICeps>({
        id_cep:0,
        num_cep:"",
        code_city:0,
        type_cep:"",
        public_place:"",
        num_initial:0,
        num_final:0,
        complement:"",
        created_at:new Date,
        city:"",
        uf:""
    })
    const [cities, setCities] = useState<ICities>()

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setCeps(values => ({ ...values, [name]: value }))
    };

   function handleSubmit(e:Event){
            e.preventDefault()
            console.log(ceps)
    }

    return (
        <>
            <NavBar/>
            <CepsForm 
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            alert=""
            message=""
            >
                {ceps}
            </CepsForm>
        </>
    )
}