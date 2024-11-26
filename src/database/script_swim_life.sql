CREATE DATABASE swimlife;

USE swimlife;

CREATE TABLE usuario (
idcadastro INT PRIMARY KEY AUTO_INCREMENT,
usuario VARCHAR (45),
email VARCHAR (50) unique,
senha int
);

DESCRIBE usuario;

CREATE TABLE noticias (
idnoticias INT PRIMARY KEY AUTO_INCREMENT,
assunto VARCHAR (45),
descricao VARCHAR (45)
);

DESCRIBE noticias;

CREATE TABLE logado (
idlogado INT PRIMARY KEY AUTO_INCREMENT,
fkcadastro INT,
data_hora DATETIME default current_timestamp
);

DESCRIBE logado;

create TABLE cliques (
idcliques INT AUTO_INCREMENT,
fkcadastro INT,
fknoticias INT,
total INT,
CONSTRAINT chkcadastrocliques foreign key (fkcadastro)
references usuario (idcadastro),
CONSTRAINT chknoticiascliques foreign key (fknoticias)
references noticias (idnoticias),
PRIMARY KEY (idcliques, fkcadastro, fknoticias)
);

DESCRIBE cliques;

SHOW TABLES;

INSERT INTO usuario VALUES
(1,'Isabela de Carvalho Francisco', 'isabelafrancisco@gmail.com', 280603);

SELECT * FROM usuario;

INSERT INTO noticias VALUES
(DEFAULT,'Michael Phelps', 'Duelo com o maior do mar'),
(DEFAULT,'Michand', 'Duelo com o maior do mar'),
(DEFAULT,'Olimpiadas', 'Duelo com o maior do mar'),
(DEFAULT,'Paraolimpiadas', 'Duelo com o maior do mar');

SELECT fknoticias, count(total) FROM cliques GROUP BY fknoticias;

select * from usuario;

