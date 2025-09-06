import express from 'express'
import { createUser } from '../controller/auth/register.js'
const route = express.Router();


// Auth routes
route.post('/auth/register', createUser)
// User routes
// route.post('/user', createUser);

export default route;