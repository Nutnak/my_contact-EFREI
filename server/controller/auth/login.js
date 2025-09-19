import bcrypt from 'bcrypt';
import User from '../../model/user.js';
import { generateAccesToken } from '../../helper/index.js';

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
    const ACCES_TOKEN = "accesToken";
    const REFRESH_TOKEN = "refreshToken";
    const {email, password} = req.body;
    const user = await User.findOne({email: email});
    if(!user) {
        return res.status(400).json('Email ou mot de passe incorrect.')
    }
    try{ 
        const userInputPassword = password;
        const matchPassword = await bcrypt.compare(userInputPassword, user.password)
        if(matchPassword){
            const accesToken = generateAccesToken(user);
            res.cookie(ACCES_TOKEN, accesToken, { httpOnly: false, secure: false, maxAge: 1000 * 60 * 60})
            // const refreshToken = jwt.sign({userid: user.id,}, process.env.JWT_SECRET_KEY, {expireIn: '1d'})
            // res.cookie(REFRESH_TOKEN, refreshToken, {httpOnly: false, secure: false});
            return res.status(200).json({message: "Bien enregistré."})
        }
    } catch(err) {
       return res.status(500).json({err: err.message})
    } 
}