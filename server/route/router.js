import express from 'express'
import { createUser } from '../controller/auth/register.js'
import { loginUser } from '../controller/auth/login.js';
import { authMiddleware } from '../controller/middleware/authMiddleware.js'
const route = express.Router();


// Auth routes
route.post('/auth/register', createUser)
route.post('/auth/login', loginUser)
// User routes
route.get('/test', authMiddleware, (req, res) => {
    res.json({message: 'Route protégée', user: req.user})
})

export default route;