-- CREATE TABLE Componentes (
-- 	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
-- 	item varchar(100) NOT NULL,
-- 	formaObtencao varchar(100) NOT NULL,
-- 	leadtime INTEGER NOT NULL,
-- 	minLote INTEGER NOT NULL,
-- 	estoqueSeguranca INTEGER NOT NULL,
-- 	estoqueInicial INTEGER NOT NULL,
-- 	unidade varchar(100) NOT NULL
-- );
DELETE FROM Componentes;
UPDATE SQLITE_SEQUENCE
SET seq = 0
WHERE name = 'Componentes';
VACUUM;
INSERT INTO Componentes (
		id,
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		1,
		'Lapiseira P207',
		1,
		'Produzido',
		0,
		0,
		0,
		'qtd'
	);
INSERT INTO Componentes (
		id,
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		2,
		'Corpo externo 207',
		2,
		'Produzido',
		500,
		0,
		0,
		'qtd'
	);
INSERT INTO Componentes (
		id,
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		3,
		'Presilha de bolso',
		1,
		'Comprado',
		50,
		0,
		0,
		'qtd'
	);
INSERT INTO Componentes (
		id,
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		4,
		'Miolo 207',
		1,
		'Produzido',
		500,
		0,
		0,
		'qtd'
	);
INSERT INTO Componentes (
		id,
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		5,
		'Corpo da ponteira',
		2,
		'Comprado',
		50,
		0,
		0,
		'qtd'
	);
INSERT INTO Componentes (
		id,
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		6,
		'Guia da ponteira',
		1,
		'Comprado',
		50,
		0,
		0,
		'qtd'
	);
INSERT INTO Componentes (
		id,
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		7,
		'Tampa',
		1,
		'Produzido',
		500,
		0,
		0,
		'qtd'
	);
INSERT INTO Componentes (
		id,
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		8,
		'Plástico ABS',
		1,
		'Comprado',
		50,
		0,
		0,
		'g'
	);
INSERT INTO Componentes (
		id,
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		9,
		'Corante azul',
		2,
		'Comprado',
		50,
		0,
		0,
		'g'
	);
INSERT INTO Componentes (
		id,
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		10,
		'Tira 0.1mm',
		1,
		'Comprado',
		50,
		0,
		0,
		'g'
	);
INSERT INTO Componentes (
		id,
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		11,
		'Borracha',
		1,
		'Produzido',
		0,
		0,
		0,
		'qtd'
	);
INSERT INTO Componentes (
		id,
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		12,
		'Capa da borracha',
		1,
		'Produzido',
		0,
		0,
		0,
		'qtd'
	);
INSERT INTO Componentes (
		id,
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		13,
		'Miolo interno 207',
		3,
		'Produzido',
		0,
		0,
		0,
		'qtd'
	);
INSERT INTO Componentes (
		id,
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		14,
		'Grafite 0.7mm',
		2,
		'Comprado',
		50,
		0,
		0,
		'qtd'
	);
INSERT INTO Componentes (
		id,
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		15,
		'Fio de borracha',
		1,
		'Comprado',
		50,
		0,
		0,
		'cm'
	);
INSERT INTO Componentes (
		id,
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		16,
		'Mola',
		1,
		'Comprado',
		50,
		0,
		0,
		'qtd'
	);
INSERT INTO Componentes (
		id,
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		17,
		'Corpo do miolo',
		2,
		'Produzido',
		0,
		0,
		0,
		'qtd'
	);
INSERT INTO Componentes (
		id,
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		18,
		'Suporte da garra',
		2,
		'Comprado',
		50,
		0,
		0,
		'qtd'
	);
INSERT INTO Componentes (
		id,
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		19,
		'Capa da garra',
		3,
		'Comprado',
		50,
		0,
		0,
		'qtd'
	);
INSERT INTO Componentes (
		id,
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		20,
		'Garras',
		1,
		'Comprado',
		50,
		0,
		0,
		'qtd'
	);
INSERT INTO Componentes (
		id,
		item,
		leadtime,
		formaObtencao,
		minLote,
		estoqueSeguranca,
		estoqueInicial,
		unidade
	)
VALUES (
		21,
		'Corante preto',
		2,
		'Comprado',
		50,
		0,
		0,
		'g'
	);