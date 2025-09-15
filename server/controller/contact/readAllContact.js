import Contact from '../../model/contact.js'

export const readAllContact = async (req, res) => {
    const userId = req.userId;
    try {
        const contactsList = await Contact.find({user: userId})
        return res.status(200).json({contactsList});
    } catch(err) {
        return res.status(400).json({err: err.message})
    }
}