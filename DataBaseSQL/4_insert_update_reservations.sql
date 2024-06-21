-- Insertar una nueva reserva
INSERT INTO Reservas (UsuarioID, EspacioID, SesionID)
VALUES (1, 1, 1);

-- Cancelar una reserva (eliminarla de la tabla Reservas)
DELETE FROM Reservas
WHERE ReservaID = 1;

-- Alternativamente, si no se desea eliminar la reserva, sino marcarla como cancelada:
-- Añadir una columna para estado de reserva
ALTER TABLE Reservas ADD COLUMN Estado VARCHAR(20) DEFAULT 'Activa';

-- Actualizar el estado de la reserva a 'Cancelada'
UPDATE Reservas
SET Estado = 'Cancelada'
WHERE ReservaID = 1;
