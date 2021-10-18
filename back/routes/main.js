import { debug } from '../app.js';
import express from 'express';
import { atualizarComponente, atualizarDependencias, pegarArvore } from '../service/componente.js';
import Producao from '../service/producao.js';

const router = express.Router();

router.post('/atualizar', async (req, res, next) => {
  const {
    body: { componente, dependencias },
  } = req;

  try {
    const result = await atualizarComponente(componente);
    await atualizarDependencias(dependencias);
    res.json(result);
  } catch (error) {
    debug(error);
    res.json(error);
  }
});

router.post('/producao', async (req, res, next) => {
  const {
    body: { demanda, recebimentosProgramados },
  } = req;

  const dados = await pegarArvore(1);

  const producao = new Producao(demanda, dados, recebimentosProgramados);

  res.json({ producao: producao.calcular(), lista: producao.pegarLista() });
});

export default router;
