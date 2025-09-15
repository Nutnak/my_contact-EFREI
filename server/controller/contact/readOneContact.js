import Contact from '../../model/contact.js'

/**
 * @swagger
 * /contacts/read/{contactId}:
 *   get:
 *     security: 
 *       - bearerAuth: []
 *     tags: 
 *       - Contacts
 *     summary: Lecture d'un contact.
 *     parameters:
 *       - name: contactId
 *         in: path
 *     responses:
 *       200:
 *         description: Affichage des informations du contact.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 firstname:
 *                   type: string
 *                 lastname:
 *                   type: string
 *                 phonenumber:
 *                   type: string
 *                 address:
 *                   type: string
 *                 city:
 *                   type: string
 *                 zipcode:
 *                   type: string
 *                 user:
 *                   type: mongoose.Schema.Types.ObjectId
 *                 createdAt: 
 *                   type: string
 *                   format: date-time
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *       400:
 *         description: Le contact n'existe pas.
 *       500:
 *         description: Une erreur est survenu pour lire les informations du contact.
 */

export const readOneContact = async (req, res) => {
    const contactIdToRead = req.params['id']
    try {
        const contact = await Contact.findById(contactIdToRead);
        if(!contact) {
            return res.status(400).json({message: "Le contact n'existe pas."})
        }
        return res.status(200).json(contact)
    } catch (err) {
        return res.status(500).json({message: "Une erreur est survenu pour lire les informations du contact."})
    }

    
}