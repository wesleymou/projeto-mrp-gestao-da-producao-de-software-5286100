import axios from 'axios';

export const calcularProducao = async (demanda) => {
  const { data } = await axios.post('/producao', { demanda });
  return data
};

export const atualizarComponente = async (componente) => {
  const { data } = await axios.post('/atualizar', componente);
  return data
}