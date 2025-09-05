require('dotenv').config()
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main(){
    await mongoose.connect(process.env.DB_URL);
    console.log("Connexion à la bdd Mongo réussie.")
};

const express = require('express')
const app = express()
const port = process.env.PORT

app.listen(port, () => {
    console.log(`Serveur backend lancé sur le port: ${port}`)
})


app.get('/', (req, res) => {
    res.send('Hello World!')
})
