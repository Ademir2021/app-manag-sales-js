import { useState } from "react";
import { ContactForm } from "../../components/contacts/ContactForm"
import { postRegister } from "../../services/handleService";
import { NavBar } from "../../components/navbar/Navbar";

type TContact = {
    name: string;
    email: string;
    phone: string;
    comments: string;
}

export function Contacts() {

    const [contacts, setContacts] = useState<TContact>({
        name: "",
        email: "",
        phone: "",
        comments: ""
    });

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setContacts(values => ({ ...values, [name]: value }))
    };

    function handleSubmit(e: Event) {
        e.preventDefault();
        if (
            contacts.name != "" &&
            contacts.phone != "" &&
            contacts.email != "" &&
            contacts.comments != "") {
            // console.log(contacts)
            postRegister(contacts, "contact")
            contacts.name = "";
            contacts.phone = "";
            contacts.email = "";
            contacts.comments = "";
        }
    }

    return (
        <>
            <NavBar />
            <ContactForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            >
                {contacts}
            </ContactForm>
        </>
    )
}