import Contact from '../../model/contact.js'

/**
 * @swagger
 * /contact/delete/{contactId}:
 *   delete:
 *     security: 
 *       - bearerAuth: []
 *     tags: 
 *       - Contacts
 *     summary: Suppression d'un contact.
 *     parameters:
 *       - name: contactId
 *         in: path
 *     responses:
 *       200:
 *         description: Contact supprimé.
 *       400:
 *         description: Le contact n'existe pas.
 *       500:
 *         description: Erreur serveur.
 */

export const deleteContact = async (req, res) => {
    const contactId = req.params['id'];
    const userId = req.userId

    try {
        await Contact.deleteOne({_id: contactId, user: userId})
        return res.status(200).json({message: "Contact supprimé."})
    } catch (err) {
        return res.status(400).json({err: err.message})
    }
};