import { useState, useEffect, useContext } from "react";
import { ContactList } from "../../components/contacts/ContactList"
import { FormatDate } from "../../components/utils/formatDate";
import { BackHome } from "../../components/utils/backHome/BackHome"
import { AuthContext } from '../../context/auth'
import api from "../../services/api/api";
import {TContact} from "./Contacts"

export function ContactsList() {

    const { user: isLogged }: any = useContext(AuthContext);
    const [contacts, setContacts] = useState<TContact[]>([])
    const [notAuthorized, setNotAuthorized] = useState<string>('')

    async function getContacts() {
        try {
            await api.get(`/contacts/${isLogged[0].id}`)
                .then(response => {
                    if (response.data !== null) {
                        setContacts(response.data)
                    } else {
                        setNotAuthorized("Acesso não permitido !")
                    }
                })
        } catch (err) { alert("error occurred !!" + err) }
    };
    useEffect(() => { getContacts() }, [])

    return (
        <>
            <BackHome />
            <p>{notAuthorized}</p>
            {contacts.length === 0 ? <p>Carregando...</p> : (
                contacts.map((contact: TContact) => (
                    <ContactList
                        key={contact.id}
                        id={contact.id}
                        created_at={FormatDate(contact.created_at)}
                        name={contact.name}
                        email={contact.email}
                        phone={contact.phone}
                        comments={contact.comments}
                    />
                )))}
        </>
    )
}