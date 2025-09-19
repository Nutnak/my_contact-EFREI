import jwt from 'jsonwebtoken';

export const generateAccesToken = (user) => {
    return jwt.sign({userid: user._id}, process.env.JWT_SECRET_KEY, {expiresIn: "15s"});
}