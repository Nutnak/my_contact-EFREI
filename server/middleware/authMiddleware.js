import jwt from 'jsonwebtoken'

export const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];
    if(!token){
        return res.status(403).json({message: "Aucun token renseigné."})
    }
    
    const tokenWithoutBearer = token.split(' ')[1];
    
    jwt.verify(tokenWithoutBearer, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({message: "Tokten invalid ou expiré."})
        }
        req.user = decoded
        next();
    });
};