import jwt from 'jsonwebtoken';

export const generateAccesToken = (user) => {
    return jwt.sign({ userid: user._id }, process.env.ACCES_TOKEN_SECRET, { expiresIn: '180s' });
}

export const generateRefreshToken = (user) => {
    return jwt.sign({ userid: user._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' });
}