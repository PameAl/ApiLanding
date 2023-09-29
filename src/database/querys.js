export const querys = {
    getAllAlumnos: "SELECT * FROM [dbo].[Alumnos]",
    addNewAlumnos: "INSERT INTO [dbo].[Alumnos] (Nombre, Apellido, Num_Documento, Sexo, Fecha_de_nacimiento, Lugar_nacimiento, Direccion, Localidad, Nombre_apellido_Padre, Ocupacion, Telefono, Email) VALUES (@Nombre, @Apellido, @Num_Documento, @Sexo, @Fecha_de_nacimiento, @Lugar_nacimiento, @Direccion, @Localidad, @Nombre_apellido_Padre, @Ocupacion, @Telefono, @Email)",
    getAlumnosById: "SELECT * FROM [dbo].[Alumnos] Where Id_Alumno = @id",
    deleteAlumnosById: "DELETE FROM [Bd_Landing].[dbo].[Alumnos] Where Id_Alumno = @id",
    getTotalAlumnos: "SELECT COUNT(*) FROM [dbo].[Alumnos]",
    updateAlumnosById: "UPDATE [dbo].[Alumnos] SET Nombre = @Nombre, Apellido = @Apellido,  Num_Documento = @Num_Documento, Sexo = @Sexo, Fecha_de_nacimiento = @Fecha_de_nacimiento, Lugar_nacimiento = @Lugar_nacimiento, Direccion = @Direccion, Localidad = @Localidad, Nombre_apellido_Padre = @Nombre_apellido_Padre, Ocupacion = @Ocupacion, Telefono = @Telefono, Email = @Email Where Id_Alumno = @id",
}