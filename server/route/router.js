import express from 'express'
import { createUser } from '../controller/auth/register.js'
import { loginUser } from '../controller/auth/login.js';
import { authMiddleware } from '../middleware/authMiddleware.js'
import { addContact } from '../controller/contact/addContact.js'
// import { test } from '../middleware/testMiddleware.js'
const route = express.Router();


// Auth routes
route.post('/auth/register', createUser)
route.post('/auth/login', loginUser)
// User routes
route.post('/contact/add/', authMiddleware, addContact);

export default route;