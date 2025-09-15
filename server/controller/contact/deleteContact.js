import Contact from '../../model/contact.js'
import User from '../../model/user.js'
import mongoose from 'mongoose';


export const deleteContact = async (req, res) => {
    const contactId = req.params['id'];

    try {
        await Contact.findByIdAndDelete(contactId);
        return res.status(200).json({message: "Contact supprimé."})
    } catch (err) {
        return res.status(400).json({message: "Une erreur est survenue durant la suppression."})
    }
};