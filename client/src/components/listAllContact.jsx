import axios from "axios";
import { useEffect, useState } from "react";
import '../css/listAllContact.css';


export const ListAllContact = () => {

    const [contacts, setContacts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/api/contacts/read', { withCredentials: true })
            .then((response) => {
                console.log('liste de contact', response.data)
                setContacts(response.data)
            })
            .catch((error => { console.log(error.message) }))
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:4000/api/contacts/delete/${id}`, {withCredentials: true})
        .then(()=>{
            setContacts(contacts.filter(contact => contact._id !== id));
        })
        .catch((error)=>console.log(error.message))
    }

    return (
        <div className="list-contacts-container">
        <h2>Liste de tous les contacts</h2>
        {contacts.length === 0 ? (
            <p>Aucun contact à afficher.</p>
        ) : (
            <ul>
                {contacts.map((contact) => (
                    <li key={contact._id}>
                        {contact.firstname} - {contact.lastname}
                        <button onClick={() => handleDelete(contact._id)}>Supprimer</button>
                    </li>
                ))}
            </ul>
        )}
    </div>
    )
}

