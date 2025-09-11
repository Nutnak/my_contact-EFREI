import  User  from '../../model/user.js'
import Contact from '../../model/contact.js'

export const addContact = async (req, res) => {
    const {firstname, lastname, phonenumber, address, city, zipcode} = req.body;
    const userId = req.userId
    // console.log(userId)

    // trouver le user avec son id 
    const user = await User.findById(userId);

    // créer le documents de contact avec le req.body
    const newContact = new Contact({firstname: firstname, lastname: lastname, phonenumber: phonenumber, address: address, city: city, zipcode: zipcode});
    
    try {
        await newContact.save()
    } catch (err) {
        return res.status(400).json({message: "Erreur lors de la création du contact, veuillez remplir tous les champs."})
    }

    try {
        // stocker l'id du contact dans la list de contact du user. 
        user.contacts.addToSet(newContact);
        await user.save()
        return res.status(200).json({message: "user ajouté"})
    } catch (err) {
        return res.status(400).json(err.message)
    }
}