-- Ver la lista de espacios de trabajo asignados a un usuario
SELECT et.EspacioID, et.Fila, et.Columna, r.SesionID, s.Fecha, s.HoraInicio, s.HoraFin
FROM EspaciosTrabajo et
JOIN Reservas r ON et.EspacioID = r.EspacioID
JOIN Sesiones s ON r.SesionID = s.SesionID
WHERE r.UsuarioID = Z;

-- Z: ID del usuario específico.