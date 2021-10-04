CREATE TABLE Dependencia (
  id INTEGER NOT NULL PRIMARY KEY,
  pai INTEGER NOT NULL,
  filho INTEGER NOT NULL,
   qtdReceita INTEGER NOT NULL
);

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

INSERT INTO Dependencia (pai, filho, qtdReceita)
VALUES (2, 8, 10);

INSERT INTO Dependencia (pai, filho, qtdReceita)
VALUES (2, 9, 0.01);

INSERT INTO Dependencia (pai, filho, qtdReceita)
VALUES (7, 10, 2);

INSERT INTO Dependencia (pai, filho, qtdReceita)
VALUES (4, 11, 1);

INSERT INTO Dependencia (pai, filho, qtdReceita)
VALUES (4, 12, 1);

INSERT INTO Dependencia (pai, filho, qtdReceita)
VALUES (4, 13, 1);

INSERT INTO Dependencia (pai, filho, qtdReceita)
VALUES (4, 14, 4);

INSERT INTO Dependencia (pai, filho, qtdReceita)
VALUES (11, 15, 2);

INSERT INTO Dependencia (pai, filho, qtdReceita)
VALUES (12, 16, 2);

INSERT INTO Dependencia (pai, filho, qtdReceita)
VALUES (13, 17, 1);

INSERT INTO Dependencia (pai, filho, qtdReceita)
VALUES (13, 18, 1);

INSERT INTO Dependencia (pai, filho, qtdReceita)
VALUES (13, 19, 1);

INSERT INTO Dependencia (pai, filho, qtdReceita)
VALUES (13, 20, 1);

INSERT INTO Dependencia (pai, filho, qtdReceita)
VALUES (13, 21, 3);

INSERT INTO Dependencia (pai, filho, qtdReceita)
VALUES (18, 22, 7);

INSERT INTO Dependencia (pai, filho, qtdReceita)
VALUES (18, 23, 0.05);