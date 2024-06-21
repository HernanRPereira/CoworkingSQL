-- Ver la lista de espacios de trabajo ocupados de una sala en una sesión x
SELECT et.EspacioID, et.Fila, et.Columna
FROM EspaciosTrabajo et
JOIN Reservas r ON et.EspacioID = r.EspacioID
WHERE et.SalaID = Y AND r.SesionID = X;

-- X: ID de la sesión específica.
-- Y: ID de la sala específica.