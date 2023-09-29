import express from 'express'
import config from './config'//aqui importamos todo el modulo config

import productsRoutes from './routers/alumnos.rutas'

const app = express()

//settings(configuramos el puerto)
app.set('port', config.port)

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use(productsRoutes);

export default app;