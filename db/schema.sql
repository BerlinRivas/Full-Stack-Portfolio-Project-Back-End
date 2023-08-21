DROP DATABASE IF EXISTS matrices_dev;
CREATE DATABASE matrices_dev;

\c matrices_dev;

CREATE TABLE matrices (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 description VARCHAR,
 url TEXT NOT NULL,
 is_favorite BOOLEAN
);
