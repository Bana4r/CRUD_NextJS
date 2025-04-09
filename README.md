## Instalacion de complementos

Para poder ejecutar este archivo primero debemos de ejecutar este comando

```npm install```

## Para ejecutar el programa

```npm run dev``` para ejecutar el sistema en forma de pruebas

## Para construir el programa

```npm run build``` construye el programa

```npm start``` inicia la ejecucion del programa "compilado"

## Script de base de datos

```
CREATE DATABASE cds
USE cds

-- Tabla de artistas
CREATE TABLE artistas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);

-- Tabla de CDs
CREATE TABLE cds (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    artista_id INT,
    precio DECIMAL(10,2) NOT NULL,
    stock INT DEFAULT 0,
    FOREIGN KEY (artista_id) REFERENCES artistas(id) ON DELETE CASCADE
);

-- Tabla de ventas
CREATE TABLE ventas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cd_id INT,
    cantidad INT NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (cd_id) REFERENCES cds(id) ON DELETE CASCADE
);


INSERT INTO artistas (nombre) VALUES ('The Beatles'), ('Pink Floyd');
INSERT INTO cds (titulo, artista_id, precio, stock) VALUES 
('Abbey Road', 1, 15.99, 10),
('The Dark Side of the Moon', 2, 16.99, 5);

SELECT c.id, c.titulo, c.precio, c.stock, a.id AS artista_id, a.nombre AS artista_nombre
      FROM cds c
      JOIN artistas a ON c.artista_id = a.id
      ORDER BY c.titulo

```
