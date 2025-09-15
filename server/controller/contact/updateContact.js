import Contact from '../../model/contact.js'

/**
 * @swagger
 * /contacts/update/{contactId}:
 *   patch:
 *     security: 
 *       - bearerAuth: []
 *     tags: 
 *       - Contacts
 *     summary: Modifier les informations d'un contact.
 *     parameters:
 *       - name: contactId
 *         in: path
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
 *         description: Informations du contact modifiées.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
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
 *       400:
 *         description: Le contact n'existe pas.
 *       500:
 *         description: Erreur serveur.
 */

export const updateContact = async (req, res) => {
    const {firstname, lastname, phonenumber, address, city, zipcode} = req.body;
    const contactId = req.params['id']

    const contactIdToUpdate = {_id: contactId}

    const updateContact = {
        firstname: firstname,
        lastname: lastname,
        phonenumber: phonenumber,
        address: address,
        city: city, 
        zipcode: zipcode
    }

    try {
        await Contact.findOneAndUpdate(contactIdToUpdate, updateContact);
        res.status(200).json({message: "Informations du contact modifiées."})
    } catch (err) {
        res.status(400).json({message: "Le contact n'existe pas."})
    }
};