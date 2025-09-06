import express from 'express'
import { createUser } from '../controller/userController.js'
const route = express.Router();

// User routes
route.get('/user', (req, res) => {
    res.status(200).json({message: "ok c good"})
});

export default route;