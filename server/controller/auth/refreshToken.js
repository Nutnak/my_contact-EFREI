import User from '../../model/user.js';
import { generateAccesToken, generateRefreshToken } from '../../helper/index.js';
import jwt from 'jsonwebtoken';


export const refreshToken = async (req, res) => {
    const cookies = req.cookies;
    if(!cookies?.jwt) return res.status(401).json({ message: "Aucun token renseigné."});
    
    const refreshToken = cookies.jwt   

    const user = await User.findOne({ refreshToken });
    if (!user) {
        return res.status(400).json('Forbidden.')
    }
    // On évalu le jwt. 
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET,  (err, decoded) => {
            if(err || user.user_id != decoded.user_id) return res.status(403);
            const accesToken = jwt.sign(
                {"user_id": user.user_id},
                process.env.ACCES_TOKEN_SECRET,
                {expiresIn: '30s'}
            );
            res.status(200).json({message: accesToken})
        })
        
  
}