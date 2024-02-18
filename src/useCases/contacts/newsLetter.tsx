import { useState, useEffect, useContext } from "react";
import { NewsLetterForm } from "../../components/contacts/newsLetterForm";
import { postRegister } from "../../services/handleService";

type TContact = {
    name?: string;
    email: string;
    phone?: string;
    comments?: string;
}

export function NewsLetter(){

    const [contacts, setContacts] = useState<TContact>({
        name:"",
        email: "",
        phone: "null",
        comments: "news Letter"
    });

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setContacts(values => ({ ...values, [name]: value }))
    };

    function handleSubmit(e:any){
        e.preventDefault();
        contacts.name = contacts.email;
        postRegister(contacts, "contact")
    }

    return(
        <NewsLetterForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        >
        {contacts}
        </NewsLetterForm>
    )
}