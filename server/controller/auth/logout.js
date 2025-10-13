import User from '../../model/user.js';

export const logout = async(req, res) => {
    // Delete côté client l'accesToken
    const cookies = req.cookies;
    if(!cookies?.jwt) return res.status(204);

    const refreshToken = cookies.jwt   

    const user = await User.findOne({ refreshToken });
    if (!user) {
        res.clearCookie('jwt', {httpOnly: true, sameSite: "none", secure: true})
        return res.status(204);
    }
    await user.updateOne({refreshToken: null});
    res.clearCookie('jwt', {httpOnly: true, sameSite: "none", secure: true})
    return res.status(204).end();
  
}