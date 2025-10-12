import express from 'express'
import { createUser } from '../controller/auth/register.js'
import { loginUser } from '../controller/auth/login.js';
import { authMiddleware } from '../middleware/authMiddleware.js'
import { addContact } from '../controller/contact/addContact.js'
import { updateContact } from '../controller/contact/updateContact.js';
import { deleteContact } from '../controller/contact/deleteContact.js';
import { readOneContact } from '../controller/contact/readOneContact.js';
import { readAllContact } from '../controller/contact/readAllContact.js';
import { refreshToken } from '../controller/auth/refreshToken.js';
import { logout } from '../controller/auth/logout.js';

// import { test } from '../middleware/testMiddleware.js'
const route = express.Router();


// Auth routes
route.post('/auth/register', createUser)
route.post('/auth/login', loginUser)
route.get('/auth/refresh', refreshToken)
route.get('/auth/logout', logout)

// Contact routes
route.post('/contacts/add/', authMiddleware, addContact);
route.patch('/contacts/update/:id', authMiddleware, updateContact)
route.delete('/contacts/delete/:id', authMiddleware, deleteContact)
route.get('/contacts/read/:id', authMiddleware, readOneContact)
route.get('/contacts/read', authMiddleware, readAllContact)
//Dashboard
route.get('/dashboard', authMiddleware)

export default route;