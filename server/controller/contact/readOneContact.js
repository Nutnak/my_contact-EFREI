import Contact from '../../model/contact.js'

export const readOneContact = async (req, res) => {
    const contactIdToRead = req.params['id']
    try {
        const contact = await Contact.findById(contactIdToRead);
        if(!contact) {
            return res.status(400).json({message: "Le contact n'existe pas."})
        }
        return res.status(200).json(contact)
    } catch (err) {
        return res.status(400).json({message: "Une erreur est survenu pour lire les informations du contact."})
    }

    
}