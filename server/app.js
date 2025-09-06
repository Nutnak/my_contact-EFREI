import 'dotenv/config'
import mongoose from 'mongoose'
import express from 'express'
import route from './route/router.js';

// mongoose.connect(process.env.DB_URL);
// const connection = mongoose.connection;

// connection.once('open', () => {
//     console.log('Connecté à la bdd.')
// })

const app = express()
app.use(express.json())
const port = process.env.PORT

app.use('/api', route);

app.listen(port, () => {
    console.log(`Serveur backend lancé sur le port: ${port}`)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})