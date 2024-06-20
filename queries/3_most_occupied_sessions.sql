-- Ver las sesiones con orden por las más ocupadas
SELECT s.SesionID, s.Fecha, s.HoraInicio, s.HoraFin, COUNT(r.ReservaID) AS TotalReservas
FROM Sesiones s
LEFT JOIN Reservas r ON s.SesionID = r.SesionID
GROUP BY s.SesionID
ORDER BY TotalReservas DESC;
