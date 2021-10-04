CREATE TABLE Componentes (
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	item varchar(100) NOT NULL,
	formaObtencao varchar(100) NOT NULL,
	leadtime INTEGER NOT NULL,
	minLote INTEGER NOT NULL,
	estoqueSeguranca INTEGER NOT NULL,
	estoqueInicial INTEGER NOT NULL,
	unidade varchar(100) NOT NULL
);

DELETE FROM Componentes;
UPDATE SQLITE_SEQUENCE SET seq = 0 WHERE name = 'Componentes';
VACUUM;

INSERT INTO Componentes (
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		'Lapiseira P207',
		1,
		'Produzido',
		0,
		0,
		0,
		'qtd'
	);

INSERT INTO Componentes (
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		'Corpo externo 207',
		2,
		'Produzido',
		500,
		0,
		0,
		'qtd'
	);

INSERT INTO Componentes (
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		'Presilha de bolso',
		1,
		'Comprado',
		500,
		0,
		0,
		'qtd'
	);

INSERT INTO Componentes (
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		'Miolo 207',
		1,
		'Produzido',
		500,
		0,
		0,
		'qtd'
	);

INSERT INTO Componentes (
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		'Corpo da ponteira',
		2,
		'Comprado',
		500,
		0,
		0,
		'qtd'
	);

INSERT INTO Componentes (
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		'Guia da ponteira',
		1,
		'Comprado',
		500,
		0,
		0,
		'qtd'
	);

INSERT INTO Componentes (
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		'Tampa',
		1,
		'Produzido',
		500,
		0,
		0,
		'qtd'
	);

INSERT INTO Componentes (
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		'Plástico ABS',
		1,
		'Comprado',
		50,
		0,
		0,
		'g'
	);

INSERT INTO Componentes (
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		'Corante azul',
		2,
		'Comprado',
		50,
		0,
		0,
		'g'
	);

INSERT INTO Componentes (
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		'Tira 0,1 mm',
		1,
		'Comprado',
		50,
		0,
		0,
		'g'
	);

INSERT INTO Componentes (
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		'Borracha',
		1,
		'Produzido',
		0,
		0,
		0,
		'qtd'
	);

INSERT INTO Componentes (
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		'Capa da borracha',
		1,
		'Produzido',
		0,
		0,
		0,
		'qtd'
	);

INSERT INTO Componentes (
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		'Miolo interno 207',
		3,
		'Produzido',
		0,
		0,
		0,
		'qtd'
	);

INSERT INTO Componentes (
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		'Grafite 0,7 mm',
		2,
		'Comprado',
		50,
		0,
		0,
		'qtd'
	);

INSERT INTO Componentes (
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		'Fio de borracha',
		1,
		'Comprado',
		50,
		0,
		0,
		'cm'
	);

INSERT INTO Componentes (
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		'Tira 0,1 mm',
		1,
		'Comprado',
		50,
		0,
		0,
		'g'
	);

INSERT INTO Componentes (
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		'Mola',
		1,
		'Comprado',
		50,
		0,
		0,
		'qtd'
	);

INSERT INTO Componentes (
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		'Corpo do miolo',
		2,
		'Produzido',
		0,
		0,
		0,
		'qtd'
	);

INSERT INTO Componentes (
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		'Suporte da garra',
		2,
		'Comprado',
		50,
		0,
		0,
		'qtd'
	);

INSERT INTO Componentes (
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		'Capa da garra',
		3,
		'Comprado',
		50,
		0,
		0,
		'qtd'
	);

INSERT INTO Componentes (
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		'Garras',
		1,
		'Comprado',
		50,
		0,
		0,
		'qtd'
	);

INSERT INTO Componentes (
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		'Plástico ABS',
		1,
		'Comprado',
		50,
		0,
		0,
		'g'
	);

INSERT INTO Componentes (
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		'Corante preto',
		2,
		'Comprado',
		50,
		0,
		0,
		'g'
	);