import moment from 'moment';
import { databasePromise } from './database.js';

const todosComponentes = async () => {
  const query = `SELECT * FROM Componentes`;
  return databasePromise(query);
};

const atualizarComponente = (componente) => {
  const { Id, Item, Leadtime, FormaObtencao, MinLote, EstoqueSeguranca, EstoqueInicial } = componente;
  const query = `
    UPDATE Componentes as e
      SET
        item = '${Item}',
        leadtime = '${Leadtime}',
        formaObtencao = '${FormaObtencao}',
        minLote = '${MinLote}',
        estoqueSeguranca = '${EstoqueSeguranca}',
        estoqueInicial = '${EstoqueInicial}'
      WHERE e.Id = '${Id}'`;

  return databasePromise(query);
};

export const pegarComponente = async (id) => {
  const query = `SELECT * FROM Componentes c WHERE c.id = ${id}`;
  const [result] = await databasePromise(query);
  return result;
};

export const reiniciarComponentes = async () => {
  const query = `
    DELETE FROM Componentes;
    UPDATE SQLITE_SEQUENCE SET seq = 0 WHERE name = 'Componentes';

    DELETE FROM Dependencia;
    UPDATE SQLITE_SEQUENCE SET seq = 0 WHERE name = 'Dependencia';

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
        50,
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
        50,
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
        50,
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
        'qtd'
      );

    // INSERT INTO Componentes (
    //     item,
    //     leadtime,
    //     formaObtencao,
    //     minLote,
    //     estoqueSeguranca,
    //     estoqueInicial
    //   )
    // VALUES (
    //     'Plástico ABS',
    //     1,
    //     'Comprado',
    //     50,
    //     0,
    //     0
    //   );

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
        'Tira 0.1mm',
        1,
        'Comprado',
        50,
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
        'Grafite 0.7mm',
        2,
        'Comprado',
        50,
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
        'cm'
      );

    // INSERT INTO Componentes (
    //     item,
    //     leadtime,
    //     formaObtencao,
    //     minLote,
    //     estoqueSeguranca,
    //     estoqueInicial
    //   )
    // VALUES (
    //     'Tira 0.1mm',
    //     1,
    //     'Comprado',
    //     50,
    //     0,
    //     0
    //   );

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
        'g'
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
  `;

  return databasePromise(query);
};
