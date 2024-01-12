import { useState, useEffect, useContext } from "react";
import { FormatDate } from "../../components/utils/formatDate";
import { PersonList } from "../../components/persons/PersonList";
import { TPersonRegister, TCeps, TCities } from './PersonRegister'
import { BackHome } from "../../components/utils/backHome/BackHome"
import api from "../../services/api/api";
import { AuthContext } from '../../context/auth'

export function PersonsList() {

    const { user: isLogged }: any = useContext(AuthContext);
    const [person, setPerson] = useState<TPersonRegister[]>([])
    const [ceps, setCeps] = useState<TCeps[]>([])
    const [cities, setCities] = useState<TCities[]>([])

    async function getPerson() {
        try {
            await api.get(`/persons/${isLogged[0].id}`)
                .then(response => {
                    setPerson(response.data)
                })
        } catch (err) {
            alert("error occurred !!" + err)
        }
    };
    useEffect(() => {
        getPerson()
    }, [])

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
 * Setar o numero do CEP
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
* Setar o numero do CEP
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
            <BackHome />
            {person.length === 0 ? <p>Carregando...</p> : (
                person.map((person: TPersonRegister) => (
                    <PersonList
                        key={person.id_person}
                        id_person={person.id_person}
                        created_at={FormatDate(person.created_at)}
                        updated_at={(person.updated_at === null ?
                            "não houve atualização" : FormatDate(person.updated_at))}
                        name={person.name_pers}
                        phone={person.phone_pers}
                        address={person.address_pers}
                        bairro={person.bairro_pers}
                        num_cep={person.num_cep = numCep(person.fk_cep)}
                        name_city={nameCity(person.fk_cep)}
                        uf={uf(person.fk_cep)}
                        cpf={person.cpf_pers}
                        id_user={person.id_person}
                        filial={person.fk_name_filial}
                        update={'Somente Listagem'}
                    />
                )))}
        </>
    )
}