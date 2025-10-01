import Contact from '../../model/contact.js'

/**
 * @swagger
 * /contacts/read/:
 *   get:
 *     security: 
 *       - bearerAuth: []
 *     tags: 
 *       - Contacts
 *     summary: Lecture de tous les contacts.
 *     responses:
 *       200:
 *         description: Affichage des informations de tous les contacts.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items: 
 *                type: object
 *                properties:
 *                  _id:
 *                    type: string
 *                  firstname:
 *                   type: string
 *                  lastname:
 *                   type: string
 *                  phonenumber:
 *                   type: string
 *                  address:
 *                   type: string
 *                  city:
 *                   type: string
 *                  zipcode:
 *                   type: string
 *                  user:
 *                   type: mongoose.Schema.Types.ObjectId
 *                  createdAt: 
 *                   type: string
 *                   format: date-time
 *                  updatedAt:
 *                   type: string
 *                   format: date-time
 *       206:
 *         description: Aucun contact dans la liste.
 *       500:
 *         description: Erreur avec le serveur.
 */

export const readAllContact = async (req, res) => {
    const userId = req.userId;
    try {
        const contactsList = await Contact.find({user: userId})
        if(contactsList.length == 0){
            return res.status(206).json([])
        } 
        return res.status(200).json(contactsList);
    } catch(err) {
        return res.status(400).json({err: err.message})
    }
}