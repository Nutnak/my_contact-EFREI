export const test = (req, res) => {
    const truc = req.headers;
    res.locals.idduuser = 
    res.status(200).json({message: truc});
};