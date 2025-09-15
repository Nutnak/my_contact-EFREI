import Contact from '../../model/contact.js'

/**
 * @swagger
 * /contacts/add:
 *   post:
 *     security: 
 *       - bearerAuth: []
 *     tags: 
 *       - Contacts
 *     summary: Création d'un nouveau contact.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstname
 *               - lastname
 *               - phonenumber
 *               - address
 *               - city
 *               - zipcode
 *             properties:
 *               firstname:
 *                 type: string
 *                 example: Jean
 *               lastname:
 *                 type: string
 *                 example: Matou
 *               phonenumber:
 *                 type: string
 *                 example: 0634231234
 *               address:
 *                 type: string
 *                 example: 17 rue de la rue.
 *               city:
 *                 type: string
 *                 example: Grigny
 *               zipcode:
 *                 type: number
 *                 example: 67890
 *     responses:
 *       200:
 *         description: Utilisateur créé.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       400:
 *         description: Erreur lors de la création du contact, veuillez remplir tous les champs.
 */

export const addContact = async (req, res) => {
    const {firstname, lastname, phonenumber, address, city, zipcode} = req.body;
    const userId = req.userId
  
    const newContact = new Contact({firstname: firstname, lastname: lastname, phonenumber: phonenumber, address: address, city: city, zipcode: zipcode, user: userId});
    
    try {
        await newContact.save()
        return res.status(200).json({message: "Contact ajouté."})
    } catch (err) {
        return res.status(400).json({message: "Erreur lors de la création du contact, veuillez remplir tous les champs."})
    }
}