-- Crear las tablas
CREATE TABLE Usuarios (
    UsuarioID SERIAL PRIMARY KEY,
    Nombre VARCHAR(100),
    Correo VARCHAR(100) UNIQUE,
    Telefono VARCHAR(15)
);

CREATE TABLE Salas (
    SalaID SERIAL PRIMARY KEY,
    Nombre VARCHAR(100),
    Ubicacion VARCHAR(100),
    NumeroFilas INT,
    NumeroColumnas INT
);

CREATE TABLE EspaciosTrabajo (
    EspacioID SERIAL PRIMARY KEY,
    SalaID INT,
    Fila INT,
    Columna INT,
    Disponible BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (SalaID) REFERENCES Salas(SalaID)
);

CREATE TABLE Sesiones (
    SesionID SERIAL PRIMARY KEY,
    Fecha DATE,
    HoraInicio TIME,
    HoraFin TIME
);

CREATE TABLE Reservas (
    ReservaID SERIAL PRIMARY KEY,
    UsuarioID INT,
    EspacioID INT,
    SesionID INT,
    FechaReserva TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UsuarioID) REFERENCES Usuarios(UsuarioID),
    FOREIGN KEY (EspacioID) REFERENCES EspaciosTrabajo(EspacioID),
    FOREIGN KEY (SesionID) REFERENCES Sesiones(SesionID)
);
