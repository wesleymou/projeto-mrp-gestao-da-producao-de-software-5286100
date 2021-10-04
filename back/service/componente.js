import moment from 'moment';
import { databaseRequest, databasePromise } from './database';

const todosComponentes = async () => {
  const query = `SELECT * FROM Events`;
  return databasePromise(query);
};

const atualizarComponente = (event) => {
  const { Id, Title, Date, Description, Observation } = event;
  const query = `
    UPDATE Events as e
      SET
        Title = '${Title}',
        Date = '${moment(Date).format('YYYY-MM-DD HH:mm:ss')}',
        Description = '${Description}',
        Observation = '${Observation}'
      WHERE e.Id = '${Id}'`;

  return databasePromise(query);
};

const reiniciarComponentes = async () => {
  const query = `
    DELETE FROM Componentes;
    UPDATE SQLITE_SEQUENCE SET seq = 0 WHERE name = 'Componentes';
    VACUUM;

    INSERT INTO Componentes (
        item,
        leadtime,
        formaObtencao,
        minLote,
        estoqueSeguranca,
        estoqueInicial
      )
    VALUES (
        'Lapiseira P207',
        1,
        'Produzido',
        0,
        0,
        0
      );

    INSERT INTO Componentes (
        item,
        leadtime,
        formaObtencao,
        minLote,
        estoqueSeguranca,
        estoqueInicial
      )
    VALUES (
        'Corpo externo 207',
        2,
        'Produzido',
        0,
        0,
        0
      );

    INSERT INTO Componentes (
        item,
        leadtime,
        formaObtencao,
        minLote,
        estoqueSeguranca,
        estoqueInicial
      )
    VALUES (
        'Presilha de bolso',
        1,
        'Comprado',
        0,
        0,
        0
      );

    INSERT INTO Componentes (
        item,
        leadtime,
        formaObtencao,
        minLote,
        estoqueSeguranca,
        estoqueInicial
      )
    VALUES (
        'Miolo 207',
        1,
        'Produzido',
        0,
        0,
        0
      );

    INSERT INTO Componentes (
        item,
        leadtime,
        formaObtencao,
        minLote,
        estoqueSeguranca,
        estoqueInicial
      )
    VALUES (
        'Corpo da ponteira',
        2,
        'Comprado',
        0,
        0,
        0
      );

    INSERT INTO Componentes (
        item,
        leadtime,
        formaObtencao,
        minLote,
        estoqueSeguranca,
        estoqueInicial
      )
    VALUES (
        'Guia da ponteira',
        1,
        'Comprado',
        0,
        0,
        0
      );

    INSERT INTO Componentes (
        item,
        leadtime,
        formaObtencao,
        minLote,
        estoqueSeguranca,
        estoqueInicial
      )
    VALUES (
        'Tampa',
        1,
        'Produzido',
        0,
        0,
        0
      );

    INSERT INTO Componentes (
        item,
        leadtime,
        formaObtencao,
        minLote,
        estoqueSeguranca,
        estoqueInicial
      )
    VALUES (
        'Plástico ABS',
        1,
        'Comprado',
        0,
        0,
        0
      );

    INSERT INTO Componentes (
        item,
        leadtime,
        formaObtencao,
        minLote,
        estoqueSeguranca,
        estoqueInicial
      )
    VALUES (
        'Corante azul',
        2,
        'Comprado',
        0,
        0,
        0
      );

    INSERT INTO Componentes (
        item,
        leadtime,
        formaObtencao,
        minLote,
        estoqueSeguranca,
        estoqueInicial
      )
    VALUES (
        'Tira 0,1 mm',
        1,
        'Comprado',
        0,
        0,
        0
      );

    INSERT INTO Componentes (
        item,
        leadtime,
        formaObtencao,
        minLote,
        estoqueSeguranca,
        estoqueInicial
      )
    VALUES (
        'Borracha',
        1,
        'Produzido',
        0,
        0,
        0
      );

    INSERT INTO Componentes (
        item,
        leadtime,
        formaObtencao,
        minLote,
        estoqueSeguranca,
        estoqueInicial
      )
    VALUES (
        'Capa da borracha',
        1,
        'Produzido',
        0,
        0,
        0
      );

    INSERT INTO Componentes (
        item,
        leadtime,
        formaObtencao,
        minLote,
        estoqueSeguranca,
        estoqueInicial
      )
    VALUES (
        'Miolo interno 207',
        3,
        'Produzido',
        0,
        0,
        0
      );

    INSERT INTO Componentes (
        item,
        leadtime,
        formaObtencao,
        minLote,
        estoqueSeguranca,
        estoqueInicial
      )
    VALUES (
        'Grafite 0,7 mm',
        2,
        'Comprado',
        0,
        0,
        0
      );

    INSERT INTO Componentes (
        item,
        leadtime,
        formaObtencao,
        minLote,
        estoqueSeguranca,
        estoqueInicial
      )
    VALUES (
        'Fio de borracha',
        1,
        'Comprado',
        0,
        0,
        0
      );

    INSERT INTO Componentes (
        item,
        leadtime,
        formaObtencao,
        minLote,
        estoqueSeguranca,
        estoqueInicial
      )
    VALUES (
        'Tira 0,1 mm',
        1,
        'Comprado',
        0,
        0,
        0
      );

    INSERT INTO Componentes (
        item,
        leadtime,
        formaObtencao,
        minLote,
        estoqueSeguranca,
        estoqueInicial
      )
    VALUES (
        'Mola',
        1,
        'Comprado',
        0,
        0,
        0
      );

    INSERT INTO Componentes (
        item,
        leadtime,
        formaObtencao,
        minLote,
        estoqueSeguranca,
        estoqueInicial
      )
    VALUES (
        'Corpo do miolo',
        2,
        'Produzido',
        0,
        0,
        0
      );

    INSERT INTO Componentes (
        item,
        leadtime,
        formaObtencao,
        minLote,
        estoqueSeguranca,
        estoqueInicial
      )
    VALUES (
        'Suporte da garra',
        2,
        'Comprado',
        0,
        0,
        0
      );

    INSERT INTO Componentes (
        item,
        leadtime,
        formaObtencao,
        minLote,
        estoqueSeguranca,
        estoqueInicial
      )
    VALUES (
        'Capa da garra',
        3,
        'Comprado',
        0,
        0,
        0
      );

    INSERT INTO Componentes (
        item,
        leadtime,
        formaObtencao,
        minLote,
        estoqueSeguranca,
        estoqueInicial
      )
    VALUES (
        'Garras',
        1,
        'Comprado',
        0,
        0,
        0
      );

    INSERT INTO Componentes (
        item,
        leadtime,
        formaObtencao,
        minLote,
        estoqueSeguranca,
        estoqueInicial
      )
    VALUES (
        'Plástico ABS',
        1,
        'Comprado',
        0,
        0,
        0
      );

    INSERT INTO Componentes (
        item,
        leadtime,
        formaObtencao,
        minLote,
        estoqueSeguranca,
        estoqueInicial
      )
    VALUES (
        'Corante preto',
        2,
        'Comprado',
        0,
        0,
        0
      );
  `;

  return databasePromise(query);
};

export { todosComponentes, atualizarComponente, reiniciarComponentes };