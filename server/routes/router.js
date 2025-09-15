import express from 'express'
import { createUser } from '../controller/auth/register.js'
import { loginUser } from '../controller/auth/login.js';
import { authMiddleware } from '../middleware/authMiddleware.js'
import { addContact } from '../controller/contact/addContact.js'
import { updateContact } from '../controller/contact/updateContact.js';
import { deleteContact } from '../controller/contact/deleteContact.js';
import { readOneContact } from '../controller/contact/readOneContact.js';
import { readAllContact } from '../controller/contact/readAllContact.js';

// import { test } from '../middleware/testMiddleware.js'
const route = express.Router();


// Auth routes
route.post('/auth/register', createUser)
route.post('/auth/login', loginUser)
// Contact routes
route.post('/contact/add/', authMiddleware, addContact);
route.patch('/contact/update/:id', authMiddleware, updateContact)
route.delete('/contact/delete/:id', authMiddleware, deleteContact)
route.get('/contact/read/:id', authMiddleware, readOneContact)
route.get('/contact/read', authMiddleware, readAllContact)

export default route;