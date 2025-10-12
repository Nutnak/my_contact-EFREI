import jwt from 'jsonwebtoken'

export const authMiddleware = (req, res, next) => {
    const headers = req.headers['authorization'];
    if(!headers) {
        return res.status(401).json({ message: "Aucun token renseigné." })
    }
    const token = headers.split(' ')[1];

    console.log(token);
 
    try {
        jwt.verify(token, process.env.ACCES_TOKEN_SECRET, (err, decoder) => {
            if(err){
                return res.status(403).json({ message: "Token invalidé" })
            }
            req.userId = decoder.userid
            next()
        })
    } catch (err) {
        res.status(403).json({ message: "Token invalidé" })
    }
};