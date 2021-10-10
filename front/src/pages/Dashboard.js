import React, { useEffect } from 'react';
import { calcularProducao } from '../services/producao';
import Componentes from './Componentes';

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

const Dashboard = () => {
  useEffect(() => {
    handleCalcularProducao();
  }, []);

  const handleCalcularProducao = async () => {
    const response = await calcularProducao([100, 100, 100, 100]);
  };

  return (
    <>
      <Componentes />

      <div className='content-header'>
        <div className='container-fluid'>
          <div className='row mb-2'>
            <div className='col-sm-6'>
              <h1 className='m-0'>Dashboard</h1>
            </div>
          </div>
        </div>
      </div>

      <section className='content'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-3 col-6'>
              <button type='button' className='btn btn-default' data-toggle='modal' data-target='#modal-default'>
                Launch Default Modal
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
