create DATABASE swimlife;

USE swimlife;

CREATE TABLE cadastro (
idcadastro INT PRIMARY KEY AUTO_INCREMENT,
usuario VARCHAR (45),
email VARCHAR (50),
senha FLOAT
);

DESCRIBE cadastro;

CREATE TABLE noticias (
idnoticias INT PRIMARY KEY AUTO_INCREMENT,
assunto VARCHAR (45),
descricao VARCHAR (45)
);

DESCRIBE noticias;

CREATE TABLE logado (
idlogado INT PRIMARY KEY AUTO_INCREMENT,
fkcadastro INT,
fknoticias INT,
data_hora DATETIME
);

DESCRIBE logado;

SHOW TABLES;

INSERT INTO cadastro VALUES
(1,'Isabela de Carvalho Francisco', 'isabelafrancisco@gmail.com', 280603),
(NULL,'Guilherme Camargo', 'guilherme@gmail.com', 1234);





