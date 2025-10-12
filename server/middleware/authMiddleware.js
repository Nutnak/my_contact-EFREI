import jwt from 'jsonwebtoken'

export const authMiddleware = (req, res, next) => {
    const token = req.cookies.accesToken;
    // console.log(token)
    if (!token) {
        return res.status(403).json({ message: "Aucun token renseigné." })
    }

    try {
        const decoded = jwt.verify(token, process.env.ACCES_TOKEN_SECRET)

        req.userId = decoded.userid
        next()
    } catch (err) {
        res.status(401).json({ message: "Token invalidé" })
    }

};