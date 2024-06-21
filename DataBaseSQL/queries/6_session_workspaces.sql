-- Ver la lista de espacios de trabajo asignados a una sesión
SELECT et.EspacioID, et.Fila, et.Columna, r.UsuarioID
FROM EspaciosTrabajo et
JOIN Reservas r ON et.EspacioID = r.EspacioID
WHERE r.SesionID = X;

-- X: ID de la sesión específica.