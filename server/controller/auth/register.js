import bcrypt from 'bcrypt'
import User from '../../model/user.js'

const saltRounds = 10

export const createUser = async (req, res) => {
    const {email, password} = req.body;
    const userExist = await User.exists({email: email})
    if(userExist) {
        res.status(400).json({message: "Cette email est déjà associée à un utilisateur."})
    } else {
        try { 
            const hashedPassword =  await bcrypt.hash(password, saltRounds);
            const newUser =  new User({email: email, password: hashedPassword})
            await newUser.save()
            res.status(200).json({message: "le user est bien créé", newUser})
        } catch (error) {
            res.status(500).json({errorMessage: error.message})
        };
    }
}   