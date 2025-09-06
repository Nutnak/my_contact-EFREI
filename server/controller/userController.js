import User from '../model/user.js'

export const createUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        const newUser = await User.create({email: email, password: password})
        // await newUser.save()
        res.status(200).json({message: "le user est bien créé", newUser})
    } catch (error) {
        res.status(500).json({error})
    };
}   