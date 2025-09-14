import express from 'express'
import { createUser } from '../controller/auth/register.js'
import { loginUser } from '../controller/auth/login.js';
import { authMiddleware } from '../middleware/authMiddleware.js'
import { addContact } from '../controller/contact/addContact.js'
import { updateContact } from '../controller/contact/updateContact.js';
import { deleteContact } from '../controller/contact/deleteContact.js';
// import { test } from '../middleware/testMiddleware.js'
const route = express.Router();


// Auth routes
route.post('/auth/register', createUser)
route.post('/auth/login', loginUser)
// Contact routes
route.post('/contact/add/', authMiddleware, addContact);
route.post('/contact/update/:id', authMiddleware, updateContact)
route.post('/contact/delete/:id', authMiddleware, deleteContact)

export default route;