import axios from "axios";

export const getAllContacts = () => {
   return axios.get('http://localhost:4000/api/contacts/read', {withCredentials: true});
}