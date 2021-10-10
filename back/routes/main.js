import { debug } from '../app.js';
import express from 'express';
import { pegarComponente, reiniciarComponentes } from '../service/componente.js';
import Producao from '../service/producao.js';

const router = express.Router();

router.get('/pegar/:id', async (req, res, next) => {
  const {
    params: { id },
  } = req;

  try {
    const componente = await pegarComponente(id);
    res.json(componente);
  } catch (error) {
    debug(error);
    res.json(error);
  }
});

router.get('/resetar', async (req, res, next) => {
  try {
    const result = await reiniciarComponentes();
    res.json(result);
  } catch (error) {
    debug(error);
    res.json(error);
  }
});

/* GET users listing. */
router.post('/', (req, res, next) => {
  const {
    body: { demanda },
  } = req;

  const dados = {
    id: 1,
    item: 'Lapiseira P207',
    leadtime: 1,
    formaObtencao: 'Produzido',
    minLote: 0,
    estoqueSeguranca: 0,
    estoqueInicial: 0,
    unidade: 'qtd',
    dependencias: [
      {
        id: 2,
        item: 'Presilha de bolso',
        leadtime: 1,
        formaObtencao: 'Comprado',
        minLote: 500,
        estoqueSeguranca: 0,
        estoqueInicial: 0,
        unidade: 'qtd',
        qtdReceita: 3,
        dependencias: [
          {
            id: 8,
            item: 'Corante azul',
            leadtime: 2,
            formaObtencao: 'Comprado',
            minLote: 50,
            estoqueSeguranca: 0,
            estoqueInicial: 0,
            unidade: 'g',
            qtdReceita: 3,
            dependencias: [],
          },
        ],
      },
      {
        id: 3,
        item: 'Miolo 207',
        leadtime: 1,
        formaObtencao: 'Produzido',
        minLote: 500,
        estoqueSeguranca: 0,
        estoqueInicial: 0,
        unidade: 'qtd',
        qtdReceita: 2,
        dependencias: [
          {
            id: 8,
            item: 'Corante azul',
            leadtime: 2,
            formaObtencao: 'Comprado',
            minLote: 50,
            estoqueSeguranca: 0,
            estoqueInicial: 0,
            unidade: 'g',
            qtdReceita: 4,
            dependencias: [
              {
                id: 9,
                item: 'Tira 0,1 mm',
                leadtime: 1,
                formaObtencao: 'Comprado',
                minLote: 50,
                estoqueSeguranca: 0,
                estoqueInicial: 0,
                unidade: 'g',
                qtdReceita: 2,
                dependencias: [],
              },
            ],
          },
        ],
      },
      {
        id: 4,
        item: 'Corpo da ponteira',
        leadtime: 2,
        formaObtencao: 'Comprado',
        minLote: 500,
        estoqueSeguranca: 0,
        estoqueInicial: 0,
        unidade: 'qtd',
        qtdReceita: 1,
        dependencias: [],
      },
      {
        id: 5,
        item: 'Guia da ponteira',
        leadtime: 1,
        formaObtencao: 'Comprado',
        minLote: 500,
        estoqueSeguranca: 0,
        estoqueInicial: 0,
        unidade: 'qtd',
        qtdReceita: 1,
        dependencias: [],
      },
      {
        id: 6,
        item: 'Tampa',
        leadtime: 1,
        formaObtencao: 'Produzido',
        minLote: 500,
        estoqueSeguranca: 0,
        estoqueInicial: 0,
        unidade: 'qtd',
        qtdReceita: 1,
        dependencias: [],
      },
      {
        id: 7,
        item: 'Plástico ABS',
        leadtime: 1,
        formaObtencao: 'Comprado',
        minLote: 50,
        estoqueSeguranca: 0,
        estoqueInicial: 0,
        unidade: 'g',
        qtdReceita: 1,
        dependencias: [],
      },
    ],
  };

  const producao = new Producao(demanda, dados).calcular();

  res.json(producao);
});

export default router;
