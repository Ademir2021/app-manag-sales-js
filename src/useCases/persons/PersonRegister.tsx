import { useState, useEffect } from "react";
import { PersonForm } from '../../components/persons/PersonForm';
import { postRegister } from "../../services/handleService";
import { PersonsValFields } from '../../components/utils/crypt/Crypt';
import { Dashboard } from "../dashboard/Dashboard";
import api from "../../services/api/api";

export type TPersonRegister = {
    id_person?: number | any
    created_at?: Date | any
    updated_at?: Date | any
    name_pers: string | any
    cpf_pers: string
    phone_pers: string
    address_pers: string
    bairro_pers: string
    fk_cep: number | undefined | any
    num_cep: string | undefined | any
    name_city: string | undefined | any
    uf: string | undefined
    fk_name_filial: number
    fk_id_user: number
}
export type TCeps = {
    id_cep: number
    num_cep: string
    code_city:number
}
export type TCities = {
    id_city: number
    name_city: string
    uf: string
}

export function FormPerson() {
    const [person, setPerson] = useState<TPersonRegister>({
        name_pers: "",
        cpf_pers: "",
        phone_pers: "",
        address_pers: "",
        bairro_pers: "",
        fk_cep: 0,
        name_city: "",
        uf: "",
        num_cep: "",
        fk_name_filial: 1,
        fk_id_user: 0
    });

    const [ceps, setCeps] = useState<TCeps[]>([])
    
    const res: any = localStorage.getItem('u')
    const [userIdLogged] = useState(JSON.parse(res))
    person.fk_id_user = userIdLogged[0].id

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson(values => ({ ...values, [name]: value }))
    }

    async function handleSubmit(e: Event) {
        e.preventDefault();
        if (PersonsValFields(person)) {
            person.cpf_pers = person.cpf_pers.replace(/[..-]/g, '')
            person.phone_pers = person.phone_pers.replace(/[()-]/g, '')
            setNumCep();
            if (person.fk_cep === undefined) {
                alert("Digite um Cep válido")
            } else {
                postRegister(person, 'persons')
            }
        }
    }

    async function getCeps() {
        try {
            await api.get(`/ceps`)
                .then(response => {
                    setCeps(response.data)
                })
        } catch (err) {
            alert("error occurred !" + err)
        }
    };
    useEffect(() => {
        getCeps()
    }, [])

    function setNumCep() {
        for (let i = 0; i < ceps.length; i++) {
            if (ceps[i].num_cep != person.num_cep) {
                person.fk_cep = undefined
                setPerson(person)
            }
        }
        for (let i = 0; i < ceps.length; i++) {
            if (ceps[i].num_cep === person.num_cep) {
                const idCep: number = ceps[i].id_cep;
                person.fk_cep = idCep;
                setPerson(person)
            }
        }
    }

    return (
        <>
            <Dashboard />
            <PersonForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                alert="."
                message="."
            >
                {person}
            </PersonForm>
        </>
    )
}
