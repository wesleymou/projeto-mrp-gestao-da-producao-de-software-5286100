CREATE TABLE Dependencia (
  pai INTEGER NOT NULL PRIMARY KEY,
  filho INTEGER NOT NULL qtdReceita INTEGER NOT NULL,
);

INSERT INTO Dependencia (pai, filho, qtdReceita)
VALUES (pai, filho, qtdReceita);

INSERT INTO Dependencia (pai, filho, qtdReceita)
VALUES (1, 2, 1);

INSERT INTO Dependencia (pai, filho, qtdReceita)
VALUES (1, 3, 1);

INSERT INTO Dependencia (pai, filho, qtdReceita)
VALUES (1, 4, 1);

INSERT INTO Dependencia (pai, filho, qtdReceita)
VALUES (1, 5, 1);

INSERT INTO Dependencia (pai, filho, qtdReceita)
VALUES (1, 6, 1);

INSERT INTO Dependencia (pai, filho, qtdReceita)
VALUES (1, 7, 1);