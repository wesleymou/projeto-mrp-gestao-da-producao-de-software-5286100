import React, { useEffect, useState } from 'react';
import arvore from './arvore.png';

const RegistroBasico = ({ producao, onClick }) => {
  return (
    <>
      <div style={{ width: '600px', position: 'fixed', right: 25, bottom: 75 }}>
        <img src={arvore} style={{ width: '600px' }} />
      </div>
      {producao.map(
        (componente, index) =>
          componente && (
            <div className='row'>
              <div className='col-6'>
                <div className='card card-info'>
                  <div
                    className='card-header'
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      backgroundColor: Math.min(...componente.map((c) => c.estoqueProjetado)) < 0 ? 'red' : '',
                    }}
                  >
                    <h6>
                      <strong>Item: {componente[0].item}</strong>
                    </h6>
                    <h6>{componente[0].minLote === 0 ? 'Lote a lote' : `Lote: ${componente[0].minLote}`}</h6>
                    <h6>LT: {componente[0].leadtime}</h6>
                    <h6>ES: {componente[0].estoqueSeguranca}</h6>
                    <button
                      type='button'
                      className='btn btn-default'
                      data-toggle='modal'
                      data-target='#modal-default'
                      style={{ width: '66px' }}
                      onClick={() => onClick(componente[0].id)}
                    >
                      Editar
                    </button>
                  </div>
                  <table className='table table-bordered'>
                    <tr>
                      <th colSpan={2}>Períodos</th>
                      {componente.map((_, i) => (
                        <th style={{ width: '49px' }}>{i /*  + 1 */}</th>
                      ))}
                    </tr>

                    <tr>
                      <th colSpan={2}>Necessidades brutas</th>
                      {componente.map((c) => (
                        <td style={{ width: '49px' }}>{c.necessidadesBrutas}</td>
                      ))}
                    </tr>
                    <tr>
                      <th colSpan={2}>Recebimentos programados</th>
                      {componente.map((c) => (
                        <td style={{ width: '49px' }}>{c.recebimentosProgramados}</td>
                      ))}
                    </tr>
                    <tr>
                      <th>Estoque projetado</th>
                      <td style={{ width: '49px' }}>{componente[0].estoqueInicial}</td>
                      {componente.map((c) => (
                        <td style={{ width: '49px', color: +c.estoqueProjetado < 0 ? 'red' : 'black' }}>{c.estoqueProjetado}</td>
                      ))}
                    </tr>
                    <tr>
                      <th colSpan={2}>Recebimento ordens planejadas</th>
                      {componente.map((c) => (
                        <td style={{ width: '49px' }}>{c.ordemRecebimento}</td>
                      ))}
                    </tr>
                    <tr>
                      <th colSpan={2}>Liberação ordens planejadas</th>
                      {componente.map((c) => (
                        <td style={{ width: '49px' }}>{c.ordemPlanejamento}</td>
                      ))}
                    </tr>
                  </table>
                </div>
              </div>
              <div className='col-6'>
                {/* {index === producao.length - 1 && <img src={arvore} style={{ width: '600px', position: 'fixed', right: 25, bottom: 75 }} />} */}
              </div>
            </div>
          )
      )}
    </>
  );
};

export default RegistroBasico;
