-- Poblar la tabla Usuarios
DO $$
BEGIN
    FOR i IN 1..100 LOOP
        INSERT INTO Usuarios (Nombre, Correo, Telefono)
        VALUES (
            'Usuario' || i,
            'usuario' || i || '@example.com',
            '123456' || LPAD(i::TEXT, 4, '0')
        );
    END LOOP;
END $$;

-- Poblar la tabla Salas
DO $$
BEGIN
    FOR i IN 1..100 LOOP
        INSERT INTO Salas (Nombre, Ubicacion, NumeroFilas, NumeroColumnas)
        VALUES (
            'Sala' || i,
            'Ubicacion' || i,
            100,
            100
        );
    END LOOP;
END $$;

-- Poblar la tabla EspaciosTrabajo
DO $$
DECLARE
    sala_id INT;
    fila INT;
    columna INT;
BEGIN
    FOR sala_id IN 1..100 LOOP
        FOR fila IN 1..100 LOOP
            FOR columna IN 1..100 LOOP
                INSERT INTO EspaciosTrabajo (SalaID, Fila, Columna, Disponible)
                VALUES (sala_id, fila, columna, TRUE);
            END LOOP;
        END LOOP;
    END LOOP;
END $$;

-- Poblar la tabla Sesiones
DO $$
BEGIN
    FOR i IN 1..100 LOOP
        INSERT INTO Sesiones (Fecha, HoraInicio, HoraFin)
        VALUES (
            CURRENT_DATE + i,
            '09:00:00',
            '11:00:00'
        );
    END LOOP;
END $$;

-- Poblar la tabla Reservas
DO $$
BEGIN
    FOR i IN 1..100 LOOP
        INSERT INTO Reservas (UsuarioID, EspacioID, SesionID, FechaReserva)
        VALUES (
            (i % 100) + 1,
            (i % 1000) + 1,
            (i % 100) + 1,
            CURRENT_TIMESTAMP
        );
    END LOOP;
END $$;
