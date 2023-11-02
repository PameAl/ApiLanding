import express from 'express'
import config from './config'//aqui importamos todo el modulo config

import productsRoutes from './routers/alumnos.rutas'
import cors from 'cors'

const app = express()


const corsOptions = {
	origin: ['https://snp0h1z7-5502.brs.devtunnels.ms',"http://127.0.0.1:5502", "http://127.0.0.1:5502/carga_alumno.html"],
	credentials: true
};

	app.use(cors(corsOptions));

//settings(configuramos el puerto)
app.set('port', config.port)

//middlewares
app.use(express.json());
app.use(express.urlencoded({ 
    extended: false}));

app.use(productsRoutes);

export default app;