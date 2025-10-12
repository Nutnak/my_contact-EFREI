import 'dotenv/config'
import mongoose from 'mongoose'
import express from 'express'
import route from './routes/router.js';
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc';
import cors from 'cors'
import cookieParser from 'cookie-parser';

mongoose.connect(process.env.DB_URL);
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Connecté à la bdd.')
})

const app = express()
const corsOption = {
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}

app.use(cors(corsOption))
app.use(express.json())
app.use(cookieParser())
const port = process.env.PORT

app.use('/api', route);


app.listen(port, () => {
    console.log(`Serveur backend lancé sur le port: ${port}`)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Mon API',
      version: '1.0.0',
    },
    servers: [
    {
      url: "http://localhost:4000/api"
    }
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT"
            }
        }  
    }
  },
  apis: ['./routes/*.js', './controller/*/*.js'], // fichiers avec annotations swagger
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))