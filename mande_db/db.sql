
CREATE EXTENSION IF NOT EXISTS postgis;

CREATE TABLE trabajador(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(10) NOT NULL,
    lastName VARCHAR(40) NOT NULL,
    direccion VARCHAR(80),
    username VARCHAR(40) NOT NULL UNIQUE,
    email VARCHAR(150) NOT NULL UNIQUE,
    contraseña VARCHAR(30) NOT NULL ,
    imgperfil TEXT NOT NULL,
    availability BOOLEAN

);

CREATE TABLE direccion(
    direccion VARCHAR(150) PRIMARY KEY,
    coordenadas GEOMETRY(POINT) NOT NULL
);

CREATE TABLE usuario(
    telefono NUMERIC PRIMARY KEY,
    documento NUMERIC NOT NULL,
    nombre VARCHAR(40) NOT NULL,
    appelido VARCHAR(40) NOT NULL,
    nombreUsuario VARCHAR(40) NOT NULL UNIQUE,
    direccion VARCHAR(100),
    email VARCHAR(150) NOT NULL UNIQUE,
    contraseña VARCHAR(100) NOT NULL,
    imgperfil TEXT NOT NULL,
    img TEXT NOT NULL
);

CREATE TABLE labor(
    id SERIAL PRIMARY KEY,
    nombre TEXT
);

CREATE TABLE factura(
    id SERIAL PRIMARY KEY,
    price NUMERIC NOT NULL,
    tiempo INTEGER NOT NULL,
    descripcion TEXT UNIQUE,
    id_trabajor INTEGER REFERENCES trabajador(id),
    rating INTEGER,
    telefono NUMERIC REFERENCES usuario(telefono),
    id_labor INTEGER REFERENCES labor(id)
);

CREATE TABLE servicio(
    id_labor INTEGER REFERENCES labor(id),
    id_trabajador INTEGER REFERENCES trabajador(id),
    description TEXT REFERENCES factura(description),
    price NUMERIC NOT NULL
);

CREATE TABLE metodoDePago(
    card_number NUMERIC PRIMARY KEY, 
    cvv INTEGER NOT NULL,
    expiration_date DATE NOT NULL,
    name_titular TEXT NOT NULL,
    telefono NUMERIC REFERENCES usuario(telefono)
);

CREATE TABLE pagos(
    pay_registration SERIAL PRIMARY KEY,
    pay_value NUMERIC,
    id_payroll INTEGER REFERENCES factura(id),
    phone  NUMERIC REFERENCES usuario(telefono),
    card_number NUMERIC REFERENCES metodoDePago(card_number)
);
