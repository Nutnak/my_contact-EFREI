import jwt from 'jsonwebtoken'

export const authMiddleware = (req, res, next) => {
    const token = req.cookies.accesToken;

    if (!token && token === undefined) {
        return res.status(403).json({ message: "Aucun token renseigné." })
    }

    try {
        const tokenWithoutBearer = token.split(' ')[1];

        const decoded = jwt.verify(tokenWithoutBearer, process.env.JWT_SECRET_KEY)

        // console.log(decoded.userid)
        req.userId = decoded.userid
        next()
    } catch (err) {
        res.status(401).json({ message: "Token invalidé" })
    }

};