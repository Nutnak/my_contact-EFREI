import bcrypt from 'bcrypt'
import User from '../../model/user.js'
import jwt from 'jsonwebtoken'

export const loginUser = async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email: email});
    if(!user) {
        res.status(400).json('Email ou mot de passe incorrect.')
    }
    try{ 
        const userInputPassword = password;
        const matchPassword = await bcrypt.compare(userInputPassword, user.password)
        if(matchPassword){
            const token = jwt.sign({userid: user._id}, process.env.JWT_SECRET_KEY)
            res.status(200).json({message: 'user enregistré.', token})
        }
    } catch(err) {
        res.status(500).json({message: "Une erreur s'est produite lors de la connexion."})
    } 
}