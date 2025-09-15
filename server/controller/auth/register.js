import bcrypt from 'bcrypt'
import User from '../../model/user.js'


/**
 * @swagger
 * /auth/register:
 *   post:
 *     tags: 
 *      - Auth
 *     summary: Création d'un nouvel utilisateur.
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
 *         description: Utilisateur créé avec succès.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 newUser:
 *                   type: object
 *                   properties:
 *                     email:
 *                      type: string
 *                     password:
 *                      type: string
 *       500:
 *         description: Une erreur s'est produite lors de la connexion.
 *       400:
 *         description: Email déjà associée.
 */

const saltRounds = 10

export const createUser = async (req, res) => {
    const {firstname, lastname, phonenumber, adress, city, zipcode, email, password} = req.body;
    const userExist = await User.exists({email: email})
    if(userExist) {
        res.status(400).json({message: "Cette email est déjà associée à un utilisateur."})
    } else {
        try { 
            const hashedPassword =  await bcrypt.hash(password, saltRounds);
            const newUser =  new User({firstname: firstname, lastname: lastname, phonenumber: phonenumber, adress: adress, city: city, zipcode: zipcode, email: email, password: hashedPassword})
            await newUser.save()
            res.status(200).json({message: "le user est bien créé", newUser})
        } catch (error) {
            res.status(500).json({errorMessage: error.message})
        };
    }
}   