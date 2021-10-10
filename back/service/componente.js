import { databasePromise } from './database.js';

export const atualizarComponente = async (componente) => {
  const { id, item, leadtime, minLote, estoqueSeguranca, estoqueInicial, formaObtencao, unidade } = componente;
  const query = `
    UPDATE Componentes as e
      SET
        item = '${item}',
        leadtime = '${leadtime}',
        minLote = '${minLote}',
        estoqueSeguranca = '${estoqueSeguranca}',
        estoqueInicial = '${estoqueInicial}',
        formaObtencao = '${formaObtencao}',
        unidade = '${unidade}'
      WHERE e.Id = '${id}'`;

  return await databasePromise(query);
};

export const atualizarDependencias = async (dependencias) => {
  for await (const { qtdReceita, idDependencia } of dependencias) {
    const query = `
    UPDATE Dependencia 
      SET 
        qtdReceita = ${qtdReceita}
      WHERE id = ${idDependencia}`;

    console.log(query);
    await databasePromise(query);
  }
};

export const pegarArvore = async (id, eDependencia) => {
  const query = `SELECT * FROM Componentes c WHERE c.id = ${id}`;
  const [componente] = await databasePromise(query);

  const queryDependencia = `SELECT c.*, d.qtdReceita, d.id as idDependencia
    FROM Dependencia d
    JOIN Componentes as c
      ON c.id = d.filho
    WHERE d.pai = ${componente.id}`;

  const dependenciasBanco = await databasePromise(queryDependencia);
  const dependencias = [];

  if (dependenciasBanco.length > 0) {
    for await (const dependenciaBanco of dependenciasBanco) {
      const dependencia = await pegarArvore(dependenciaBanco.id);
      dependencias.push({ ...dependenciaBanco, ...dependencia });
    }
  }

  return { ...componente, dependencias };
};
