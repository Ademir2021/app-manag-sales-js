import { useState, useEffect, useRef, useContext } from "react"
import { FormatDate } from "../../components/utils/formatDate";
import { PersonFormUpdate } from "../../components/persons/PersonFormUpdate";
import { PersonList } from "../../components/persons/PersonList";
import { TPersonRegister, TCeps, TCities } from './PersonRegister'
import { postRegister, putUpdate } from "../../services/handleService";
import { PersonsValFields } from "../../components/utils/crypt/Crypt";
import { BackHome } from "../../components/utils/backHome/BackHome"
import { AuthContext } from '../../context/auth'
import api from "../../services/api/api";

import "../../App.css"

export function PersonUpdate() {
    const { user: isLogged }: any = useContext(AuthContext);
    const [persons, setPersons] = useState<TPersonRegister[]>([])
    const [ceps, setCeps] = useState<TCeps[]>([])
    const [cities, setCities] = useState<TCities[]>([])
    const [person, setPerson] = useState<TPersonRegister>({
        id_person: 0,
        created_at: '',
        updated_at: '',
        name_pers: '',
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
    })

    const [dropdown, setDropdown] = useState<string>("");
    const modalRef = useRef<any>(null);

    function listUpdate(_person: TPersonRegister) {
        person.id_person = _person.id_person
        person.name_pers = _person.name_pers
        person.cpf_pers = _person.cpf_pers
        person.phone_pers = _person.phone_pers
        person.address_pers = _person.address_pers
        person.bairro_pers = _person.bairro_pers
        person.num_cep = _person.num_cep
        person.fk_cep = setNumCep(person.num_cep);
        person.name_city = _person.name_city
        person.uf = _person.uf
        getPersons()
        toggleDropdown()
    }

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson(values => ({ ...values, [name]: value }))
    };

    async function getPersons(): Promise<void> {
        await api.get<TPersonRegister[]>(`/person_users/${isLogged[0].id}`)
            .then(response => {
                const res: TPersonRegister[] = response.data
                setPersons(res)
                for (let i = 0; res.length > i; i++) {
                    if (person.id_person === res[i].id_person) {
                        person.name_pers = res[i].name_pers
                        person.cpf_pers = res[i].cpf_pers
                        person.phone_pers = res[i].phone_pers
                        person.address_pers = res[i].address_pers
                        person.bairro_pers = res[i].bairro_pers
                        person.fk_name_filial = res[i].fk_name_filial
                        person.fk_id_user = res[0].fk_id_user
                    }
                }
            })
    };

    if (person.fk_id_user === 0) { /** Busca Person somente 1 vez ! */
        getPersons()
        person.fk_id_user = isLogged[0].id
    }

    useEffect(() => {
    }, [person.id_person])

    async function handleSubmit(e: Event) {
        e.preventDefault();
        if (PersonsValFields(person)) {
            person.cpf_pers = person.cpf_pers.replace(/[..-]/g, '')
            person.phone_pers = person.phone_pers.replace(/[()-]/g, '')
            postRegister(person, 'persons')
        } else {
            alert("Digite um novo usuário")
        }
    };

    async function handleUpdate(e: Event) {
        e.preventDefault();
        if (PersonsValFields(person)) {

            listUpdate(person); //Atualiza o CEP do Cliente

            person.cpf_pers = person.cpf_pers.replace(/[..-]/g, '')
            person.phone_pers = person.phone_pers.replace(/[()-]/g, '')
            putUpdate(person.id_person, person, 'persons')
            getPersons()
        }
    };

    async function handleDelete(e: Event) {
        e.preventDefault();
        setPerson({
            id_person: 0,
            created_at: '',
            name_pers: '',
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
        })
        person.fk_id_user = isLogged[0].id
        alert("Digite um novo usuário !!")
    };
    function toggleDropdown(): void {
        setDropdown("modal-show");
    };
    function closeDropdown(e: Event) {
        e.stopPropagation();
        const contain = modalRef.current.contains(e.target);
        if (contain) {
            setDropdown("");
            document.body.removeEventListener("click", closeDropdown);
        }
        if (person.name_pers !== null) {
            window.location.replace("/invoice_sales");
        }
    };

    async function getCeps() {
        try {
            await api.get(`/ceps`)
                .then(response => {
                    setCeps(response.data)
                })
        } catch (err) {
            alert("error occurred !!" + err)
        }
    };
    useEffect(() => {
        getCeps()
    }, [])

    async function getCities() {
        try {
            await api.get(`/cities`)
                .then(response => {
                    setCities(response.data)
                })
        } catch (err) {
            alert("error occurred !!" + err)
        }
    };
    useEffect(() => {
        getCities()
    }, [])

    /**
 * Setar id do CEP
 * @param idCep
 * @returns 
 */
    function numCep(idCep: number) {
        for (let i = 0; i < ceps.length; i++) {
            if (ceps[i].id_cep === idCep) {
                const cep: string = ceps[i].num_cep;
                return cep;
            }
        }
    }


    /**
 * Setar id pelo numero do CEP
 * @param numCep
 * @returns 
 */
    function setNumCep(numCep: String) {
        for (let i = 0; i < ceps.length; i++) {
            if (ceps[i].num_cep === numCep) {
                const idCep: number = ceps[i].id_cep;
                return idCep;
            }
        }
    }

    /**
* Setar o id da Cidade
* @param idCity
* @returns 
*/
    function nameCity(idCity: number) {
        for (let i = 0; i < cities.length; i++) {
            if (cities[i].id_city === idCity) {
                const city: String = cities[i].name_city;
                return city;
            }
        }
    }

    function uf(idCity: number) {
        for (let i = 0; i < cities.length; i++) {
            if (cities[i].id_city === idCity) {
                const uf: String = cities[i].uf;
                return uf;
            }
        }
    }

    return (
        <>
            <PersonFormUpdate
                handleSubmit={handleSubmit}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
                handleChange={handleChange}
                close={closeDropdown}
                className={dropdown}
                modalRef={modalRef}
                alert=""
                message=""
            >
                {person}
            </PersonFormUpdate>
            <BackHome />
            {persons.length === 0 ? <p>Carregando...</p> : (
                persons.map((person: TPersonRegister) => (
                    <PersonList
                        key={person.id_person}
                        id_person={person.id_person}
                        created_at={FormatDate(person.created_at)}
                        updated_at={person.updated_at === null ?
                            "não houve atualização" : (FormatDate(person.updated_at))}
                        name={person.name_pers}
                        phone={person.phone_pers}
                        address={person.address_pers}
                        bairro={person.bairro_pers}
                        num_cep={person.num_cep = numCep(person.fk_cep)}
                        name_city={person.name_city = nameCity(person.fk_cep)}
                        uf={person.uf = uf(person.fk_cep)}
                        cpf={person.cpf_pers}
                        id_user={person.fk_id_user}
                        filial={person.fk_name_filial}
                        update={<div onClick={() =>
                            listUpdate(person)}>Atualizar</div>}
                    />
                )))}
        </>
    )
}





