import jwt from 'jsonwebtoken'

export const authMiddleware = (req, res, next) => {
    const token = req.cookies.accesToken;
    // console.log(token)
    if (!token) {
        return res.status(403).json({ message: "Aucun token renseigné." })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

        req.userId = decoded.userid
        next()
    } catch (err) {
        res.status(401).json({ message: "Token invalidé" })
    }

};