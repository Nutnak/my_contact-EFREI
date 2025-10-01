import axios from "axios";
import { useEffect, useState } from "react";
import contactService from '../../src/'

export const ListAllContact = () => {

    const [contacts, setContacts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/api/contacts/read', { withCredentials: true })
            .then((response) => {
                console.log(response.data[0])
                setContacts(response.data[0])
            })
            .catch((error => { console.log(error.message) }))
    }, []);

    return (
        <div>
        <h2>Liste de tous les contacts</h2>
        {contacts.length === 0 ? (
            <p>Aucun contact à afficher.</p>
        ) : (
            <ul>
                {contacts.map((contact) => (
                    <li key={contact._id}>
                        {contact.firstname} - {contact.lastname}
                    </li>
                ))}
            </ul>
        )}
    </div>
    )
}