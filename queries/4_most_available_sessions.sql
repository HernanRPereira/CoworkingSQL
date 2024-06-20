-- Ver las sesiones con orden por las más disponibles
SELECT s.SesionID, s.Fecha, s.HoraInicio, s.HoraFin, 
       (et_count.TotalEspacios - COUNT(r.ReservaID)) AS TotalDisponibles
FROM Sesiones s
LEFT JOIN Reservas r ON s.SesionID = r.SesionID
JOIN (
    SELECT e.SalaID, COUNT(e.EspacioID) AS TotalEspacios
    FROM EspaciosTrabajo e
    GROUP BY e.SalaID
) et_count ON r.EspacioID = et_count.SalaID
GROUP BY s.SesionID, et_count.TotalEspacios
ORDER BY TotalDisponibles DESC;
