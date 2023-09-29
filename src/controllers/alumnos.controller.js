import { getConnection, sql, querys } from '../database'; // Asegúrate de importar sql y getConnection desde el archivo de conexión

export const getAlumnos = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .query(querys.getAllAlumnos);
    
        res.json(result.recordsets);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

export const createNewAlumnos = async (req, res) => {
    const {Nombre, Apellido, Num_Documento, Sexo, Fecha_de_nacimiento, Lugar_nacimiento, Direccion, Localidad, Nombre_apellido_Padre, Ocupacion, Telefono, Email } = req.body;
    //let { Cantidad } = req.body;

    function isNull(value) {
        return value == null;    
    }

    if(isNull(Nombre) || isNull(Apellido) || isNull(Num_Documento) || isNull(Sexo) || isNull(Fecha_de_nacimiento) || isNull(Lugar_nacimiento) || isNull(Direccion) || isNull(Localidad) || isNull(Nombre_apellido_Padre) || isNull(Ocupacion) || isNull(Telefono) || isNull(Email)) {
        return res.status(400).json({msg:'Importante! Llena todo los campos'})
    }

    //if (Cantidad == null) Cantidad = 0;

    try{
        const pool = await getConnection();
    
        await pool.request()
        .input("Nombre", sql.VarChar, Nombre)
        .input("Apellido", sql.VarChar, Apellido)
        .input("Num_Documento", sql.VarChar, Num_Documento)
        .input("Sexo", sql.VarChar, Sexo)
        .input("Fecha_de_nacimiento", sql.VarChar, Fecha_de_nacimiento)
        .input("Lugar_nacimiento", sql.VarChar, Lugar_nacimiento)
        .input("Direccion", sql.VarChar, Direccion)
        .input("Localidad", sql.VarChar, Localidad)
        .input("Nombre_apellido_Padre", sql.VarChar, Nombre_apellido_Padre)
        .input("Ocupacion", sql.VarChar, Ocupacion)
        .input("Telefono", sql.VarChar, Telefono)
        .input("Email", sql.VarChar, Email)
        .query(querys.addNewAlumnos);

        res.json({Nombre, Apellido, Num_Documento, Sexo, Fecha_de_nacimiento, Lugar_nacimiento, Direccion, Localidad, Nombre_apellido_Padre, Ocupacion, Telefono, Email});
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }  
};

export const getAlumnosById = async (req, res) => {
    try {
        const { id } = req.params; // El parámetro se llama 'id', no 'id_producto'
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("id", sql.Int, id) // Usamos 'id' como parámetro
            .query(querys.getAlumnosById); // Consulta SQL para obtener el producto

        if (result.recordset.length === 0) {
            // Si no se encuentra ningún producto con ese ID, devolvemos un mensaje de error
            res.status(404).send("Alumno no encontrado");
        } else {
            res.status(200).send(result.recordset[0]);
        }
    } catch (error) {
        res.status(500).send("Error al obtener el alumno");
    }
};

export const deleteAlumnosById = async (req, res) => {
    try {
        const { id } = req.params; // El parámetro se llama 'id', no 'id_producto'
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("id", sql.Int, id) // Usamos 'id' como parámetro
            .query(querys.deleteAlumnosById); // Consulta SQL para obtener el producto

        if (result.recordset.length === 0) {
            // Si no se encuentra ningún producto con ese ID, devolvemos un mensaje de error
            res.status(404).send("Alumno no encontrado");
        } else {
            res.status(200).send(result.recordset[0]);
        }
    } catch (error) {
        res.status(500).send("Alumno eliminado");
    }
};

export const getTotalAlumnos = async (req, res) => {
    
    const pool = await getConnection();
    const result = await pool
    .request()
    .query(querys.getTotalAlumnos);
    
    res.json(result.recordset[0][''])
};

export const updateAlumnosById = async (req, res) => {
    try {
        const { Nombre, Apellido, Num_Documento, Sexo, Fecha_de_nacimiento, Lugar_nacimiento, Direccion, Localidad, Nombre_apellido_Padre, Ocupacion, Telefono, Email } = req.body;
        const { id } = req.params;

        if (!Nombre || !Apellido || !Num_Documento || !Sexo || !Fecha_de_nacimiento || !Lugar_nacimiento || !Direccion || !Localidad || !Nombre_apellido_Padre || !Ocupacion || !Telefono || !Email) {
            return res.status(400).json({ msg: "Campos requeridos incompletos" });
        }

        const pool = await getConnection();
        const result = await pool
            .request()
            .input("id", sql.Int, id)
            .input("Nombre", sql.VarChar, Nombre)
            .input("Apellido", sql.VarChar, Apellido)
            .input("Num_Documento", sql.VarChar, Num_Documento)
            .input("Sexo", sql.VarChar, Sexo)
            .input("Fecha_de_nacimiento", sql.VarChar, Fecha_de_nacimiento)
            .input("Lugar_nacimiento", sql.VarChar, Lugar_nacimiento)
            .input("Direccion", sql.VarChar, Direccion)
            .input("Localidad", sql.VarChar, Localidad)
            .input("Nombre_apellido_Padre", sql.VarChar, Nombre_apellido_Padre)
            .input("Ocupacion", sql.VarChar, Ocupacion)
            .input("Telefono", sql.VarChar, Telefono)
            .input("Email", sql.VarChar, Email)
            .query(querys.updateAlumnosById);
           

        if (result.rowsAffected[0] === 0) {
            return res.status(404).json({ msg: "Alumno no encontrado" });
        }

        res.status(200).json({ Nombre, Apellido, Num_Documento, Sexo, Fecha_de_nacimiento, Lugar_nacimiento, Direccion, Localidad, Nombre_apellido_Padre, Ocupacion, Telefono, Email });
    } catch (error) {
        res.status(500).json({ msg: "Error en la actualización del alumno" });
    }
};