-- Ver la lista de espacios de trabajo disponibles de una sala en una sesión x
SELECT et.EspacioID, et.Fila, et.Columna
FROM EspaciosTrabajo et
LEFT JOIN Reservas r ON et.EspacioID = r.EspacioID AND r.SesionID = X
WHERE et.SalaID = Y AND r.ReservaID IS NULL;

-- X: ID de la sesión específica.
-- Y: ID de la sala específica.