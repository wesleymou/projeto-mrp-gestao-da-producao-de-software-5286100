import axios from 'axios';

export const calcularProducao = async (demanda) => {
  const { data } = await axios.post('/', { demanda });
  return data
};
