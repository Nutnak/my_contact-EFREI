import Contact from '../../model/contact.js'

export const deleteContact = async (req, res) => {
    const contactIdToDelete = req.params['id'];
    try {   
        await Contact.deleteOne({_id: contactIdToDelete})
        res.status(200).json({message: "Contact bien supprimé."})
    } catch(err) {
        res.status(400).json({message: "Une erreur est survenue lors de la suppression du contact."})
    }
};