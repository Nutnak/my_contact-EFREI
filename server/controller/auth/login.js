import bcrypt from 'bcrypt'
import User from '../../model/user.js'
import jwt from 'jsonwebtoken'

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags: 
 *      - Auth
 *     summary: Connexion d'un utilisateur.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       200:
 *         description: Utilisateur connecté, envoie du token.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       500:
 *         description: Une erreur s'est produite lors de la connexion.
 *       400:
 *         description: Email et/ou mot de passe incorrect.
 */

export const loginUser = async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email: email});
    if(!user) {
        res.status(400).json('Email ou mot de passe incorrect.')
    }
    try{ 
        const userInputPassword = password;
        const matchPassword = bcrypt.compare(userInputPassword, user.password)
        if(matchPassword){
            const token = jwt.sign({userid: user._id}, process.env.JWT_SECRET_KEY)
            res.status(200).json({token})
        }
    } catch(err) {
        res.status(500).json({message: "Une erreur s'est produite lors de la connexion."})
    } 
}