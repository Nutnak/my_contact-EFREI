import  User  from '../../model/user.js'
import Contact from '../../model/contact.js'

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