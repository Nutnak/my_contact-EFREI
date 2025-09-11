import jwt from 'jsonwebtoken'

export const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];
    if(!token){
        return res.status(403).json({message: "Aucun token renseigné."})
    }
    
    const tokenWithoutBearer = token.split(' ')[1];
    
    const decoded = jwt.verify(tokenWithoutBearer, process.env.JWT_SECRET_KEY)

    // console.log(decoded.userid)
    req.userId = decoded.userid
    next()
};