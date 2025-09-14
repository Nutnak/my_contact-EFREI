import Contact from '../../model/contact.js'
import User from '../../model/user.js'
import mongoose from 'mongoose';


export const deleteContact = async (req, res) => {
    const contactIdToDelete = req.params['id'];
    const userId = req.userId
    try {   
        // Trouver le contact à suppr. 
        const contactToDelete = await Contact.findById(contactIdToDelete);
        if(!contactToDelete) {
            return res.status(400).json({message: "Ce contact n'existe pas."})
        }
        // Supprimer le contact de bdd.
        await Contact.findOneAndDelete({_id: contactIdToDelete})
        // Supprimer le contact de la liste du user.
        await User.updateOne({_id: userId}, {$pull: { contacts: mongoose.Types.ObjectId.createFromHexString(contactIdToDelete) }})
        return res.status(200).json({message: "Contact bien supprimé."})
    } catch(err) {
        return res.status(400).json({err: err.message})
    }
};