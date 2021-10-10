import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { atualizarComponente } from '../services/producao';

const Componentes = ({ data, onSubmit }) => {
  const [componente, setComponente] = useState({
    item: '',
    leadtime: '',
    minLote: '',
    estoqueSeguranca: '',
    estoqueInicial: '',
    formaObtencao: '',
    unidade: '',
  });

  const [dependencias, setDependencias] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (data) {
      const { dependencias, ...componente } = data;

      setComponente(componente);
      setDependencias(dependencias);
    }
  }, [data]);

  const handleChange = (e) => {
    // @ts-ignore
    setComponente({ ...componente, [e.target.name]: e.target.value });
  };

  const handleChangeArray = (index, value) => {
    const dependenciasAux = [...dependencias];
    dependenciasAux[index].qtdReceita = value;
    setDependencias([...dependenciasAux]);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    await atualizarComponente({ componente, dependencias });
    await onSubmit();
    setIsLoading(false)

    // @ts-ignore
    window.$('#modal-default').modal('hide');
  };
  return (
    <>
      <div className='modal fade' id='modal-default'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='card card-info'>
              <div className='card-header'>
                <h3 className='card-title'>Componentes</h3>
              </div>
              <form onSubmit={handleOnSubmit}>
                <div className='card-body'>
                  <div className='row'>
                    <div className='col-sm-12'>
                      <div className='form-group'>
                        <label>Item</label>
                        <input type='text' className='form-control' name='item' value={componente.item} onChange={handleChange} />
                      </div>
                    </div>
                    <div className='col-sm-12'>
                      <div className='form-group'>
                        <label>Forma de obtenção</label>
                        <select className='custom-select' name='formaObtencao' value={componente.formaObtencao} onChange={handleChange}>
                          <option disabled selected></option>
                          <option>Comprado</option>
                          <option>Produzido</option>
                        </select>
                      </div>
                    </div>
                    <div className='col-sm-12'>
                      <div className='form-group'>
                        <label>Tempo de obtenção em semanas</label>
                        <input type='number' className='form-control' name='leadtime' value={componente.leadtime} onChange={handleChange} />
                      </div>
                    </div>

                    <div className='col-sm-12'>
                      <div className='form-group'>
                        <label>Tamanho Lote minimo</label>
                        <input type='number' className='form-control' name='minLote' value={componente.minLote} onChange={handleChange} />
                      </div>
                    </div>
                    <div className='col-sm-12'>
                      <div className='form-group'>
                        <label>Estoque de segurança</label>
                        <input
                          type='number'
                          className='form-control'
                          name='estoqueSeguranca'
                          value={componente.estoqueSeguranca}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='col-sm-12'>
                      <div className='form-group'>
                        <label>Estoque inicial</label>
                        <input
                          type='number'
                          className='form-control'
                          name='estoqueInicial'
                          value={componente.estoqueInicial}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='col-sm-12'>
                      <div className='form-group'>
                        <label>Unidade</label>
                        <select className='custom-select' name='unidade' value={componente.unidade} onChange={handleChange}>
                          <option disabled selected></option>
                          <option value=''>qtd</option>
                          <option value=''>g</option>
                          <option value=''>cm</option>
                        </select>
                      </div>
                    </div>
                    <div className='col-sm-12'>
                      <table className='table table-bordered'>
                        <colgroup>
                          <col />
                          <col width='110px' />
                        </colgroup>
                        <thead>
                          <tr>
                            <th>Item</th>
                            <th>quantidade</th>
                          </tr>
                        </thead>
                        <tbody>
                          {dependencias.length === 0 && (
                            <tr>
                              <td colSpan={2}>Este item não tem dependencias</td>
                            </tr>
                          )}
                          {dependencias.length > 0 &&
                            dependencias.map((dependencia, index) => (
                              <tr>
                                <td>{dependencia.item}</td>
                                <td>
                                  <input
                                    type='number'
                                    className='form-control'
                                    name='qtdReceita'
                                    value={dependencias[index].qtdReceita}
                                    onChange={(e) => handleChangeArray(index, e.target.value)}
                                  />
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className='card-footer' style={{ backgroundColor: 'transparent' }}>
                  <button type='submit' className='btn btn-info' disabled={isLoading}>
                    Salvar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Componentes;
