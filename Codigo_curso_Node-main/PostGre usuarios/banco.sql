-- Geração de Modelo físico
-- Sql ANSI 2003 - brModelo.



CREATE TABLE IF NOT EXISTS login (
senha VARCHAR(255),
usuario VARCHAR(255)
);

CREATE TABLE  IF NOT EXISTS  pessoa (
idpessoa INTEGER PRIMARY KEY,
nome VARCHAR(255),
telefone VARCHAR(255)
);

CREATE TABLE  IF NOT EXISTS evento (
idevento INTEGER PRIMARY KEY,
data DATE,
nome VARCHAR(255)
);

CREATE TABLE  IF NOT EXISTS  local (
idocal INTEGER PRIMARY KEY,
estado VARCHAR(255),
cidade VARCHAR(255)
);

CREATE TABLE  IF NOT EXISTS caravana (
idcaravana INTEGER PRIMARY KEY,
idpessoa INTEGER,
idevento INTEGER,
idcoordenador INTEGER,
idocal INTEGER,
quantp INTEGER,
FOREIGN KEY(idpessoa) REFERENCES pessoa (idpessoa),
FOREIGN KEY(idevento) REFERENCES evento (idevento),
FOREIGN KEY(idocal) REFERENCES local (idocal)
);

CREATE TABLE IF NOT EXISTS coordenador (
idcoordenador INTEGER PRIMARY KEY,
telefone VARCHAR(255),
nome VARCHAR(255)
);