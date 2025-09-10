import express from 'express'
import { createUser } from '../controller/auth/register.js'
import { loginUser } from '../controller/auth/login.js';
const route = express.Router();


// Auth routes
route.post('/auth/register', createUser)
route.post('/auth/login', loginUser)
// User routes
// route.post('/user', createUser);

export default route;