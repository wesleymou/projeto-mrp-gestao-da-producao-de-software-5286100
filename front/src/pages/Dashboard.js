import React, { useEffect, useState } from 'react';
import { calcularProducao } from '../services/producao';
import Componentes from './Componentes';
import RegistroBasico from './RegistroBasico';

const Dashboard = () => {
  const [componente, setComponente] = useState(undefined);
  const [componentes, setComponentes] = useState([]);
  const [demanda, setDemanda] = useState([100, 100, 100, 100, 100, 100, 100, 100]);
  const [producao, setProducao] = useState([]);

  useEffect(() => {
    handleCalcularProducao(demanda);
  }, []);

  const handleCalcularProducao = async (demanda) => {
    setComponentes([]);
    // @ts-ignore
    const { lista, producao } = await calcularProducao(demanda);
    setComponentes(lista);
    setProducao(producao);
  };

  const handleChangeArray = (index, value) => {
    const demandaAux = [...demanda];
    demandaAux[index] = value;
    setDemanda(demandaAux);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleCalcularProducao(demanda);
  };

  return (
    <>
      <Componentes data={componente} onSubmit={() => handleCalcularProducao(demanda)} />

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
            <div className='col-12'>
              <form onSubmit={handleOnSubmit}>
                <table className='table table-bordered'>
                  <colgroup>
                    {demanda.map(() => (
                      <col /* width='50px' */ />
                    ))}
                    <col width='100px' />
                  </colgroup>
                  <thead>
                    <tr>
                      {demanda.map((_, index) => (
                        <th>{index + 1}</th>
                      ))}
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {demanda.map((d, index) => (
                        <td>
                          <input
                            type='number'
                            className='form-control'
                            name='qtdReceita'
                            value={d}
                            onChange={(e) => handleChangeArray(index, e.target.value)}
                          />
                        </td>
                      ))}
                      <td>
                        <button type='submit' className='btn btn-info'>
                          Calcular
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
          </div>

          {/* {componentes.map((componente) => (
            <div className='row'>
              <div className='col-lg-3 col-6'>
                <button
                  type='button'
                  className='btn btn-default'
                  data-toggle='modal'
                  data-target='#modal-default'
                  onClick={() => setComponente(componente)}
                >
                  {componente.item}
                </button>
              </div>
            </div>
          ))} */}

          <div className='row mb-2'>
            <div className='col-sm-6'>
              <h4 className='m-0'>Registros básicos de cada item:</h4>
            </div>
          </div>
          <RegistroBasico producao={producao} onClick={(id) => setComponente(componentes.find((componente) => componente.id === id))} />

          {/* {demandas.map((demanda) => (
            <div className='row'>
              <div className='col-lg-3 col-6'>
                <Demanda data={demanda}/>
              </div>
            </div>
          ))} */}
        </div>
      </section>
    </>
  );
};

export default Dashboard;
