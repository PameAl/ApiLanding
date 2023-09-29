//aqui vamos a guardar las rutas para llamarlas desde otro documento
import {Router} from 'express'

import { 
    createNewAlumnos, 
    getAlumnos, 
    getTotalAlumnos, 
    getAlumnosById, 
    deleteAlumnosById,
    updateAlumnosById,
 } from '../controllers/alumnos.controller'

const router = Router()

router.get('/alumnos', getAlumnos)

router.post('/alumnos', createNewAlumnos)//para crear productos

router.get('/alumnos/count', getTotalAlumnos)

router.get('/alumnos/:id', getAlumnosById)//para obtener por id

router.delete('/alumnos/:id', deleteAlumnosById)//para eliminar

router.put('/alumnos/:id', updateAlumnosById)//para actualizar

export default router 