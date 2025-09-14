import Contact from '../../model/contact.js'

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
        res.status(200).json({message: "Contact updaté."})
    } catch (err) {
        res.status(400).json({message: "Une erreur est survenue lors de l'update du user."})
    }
};