import React, { useState } from 'react';
import Select from 'react-select';

const Componentes = () => {
  const [component, setComponent] = useState({
    item: '',
    leadtime: '',
    minLote: '',
    estoqueSeguranca: '',
    qtdReceita: '',
    estoqueInicial: '',
    formaObtencao: '',
  });

  const handleChange = (e) => {
    // @ts-ignore
    setComponent({ [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className='content-header'>
        <div className='container-fluid'>
          <div className='row mb-2'>
            <div className='col-sm-6'>
              <div className='card card-info'>
                <div className='card-header'>
                  <h3 className='card-title'>Componentes</h3>
                </div>
                <form className=''>
                  <div className='card-body'>
                    <div className='row'>
                      <div className='col-sm-12'>
                        <div className='form-group'>
                          <label>Item</label>
                          <input type='text' className='form-control' name='item' value={component.item} onChange={handleChange} />
                        </div>
                      </div>
                      <div className='col-sm-12'>
                        <div className='form-group'>
                          <label>Forma de obtenção</label>
                          <select className='custom-select' name='formaObtencao' value={component.formaObtencao} onChange={handleChange}>
                            <option disabled selected></option>
                            <option>Comprado</option>
                            <option>Produzido</option>
                          </select>
                        </div>
                      </div>
                      <div className='col-sm-12'>
                        <div className='form-group'>
                          <label>Tempo de obtenção em semanas</label>
                          <input type='number' className='form-control' name='leadtime' value={component.leadtime} onChange={handleChange} />
                        </div>
                      </div>

                      <div className='col-sm-12'>
                        <div className='form-group'>
                          <label>Tamanho Lote minimo</label>
                          <input type='number' className='form-control' name='minLote' value={component.minLote} onChange={handleChange} />
                        </div>
                      </div>
                      <div className='col-sm-12'>
                        <div className='form-group'>
                          <label>Estoque de segurança</label>
                          <input
                            type='number'
                            className='form-control'
                            name='estoqueSeguranca'
                            value={component.estoqueSeguranca}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className='col-sm-12'>
                        <div className='form-group'>
                          <label>Quantidade da "receita"</label>
                          <input type='number' className='form-control' name='qtdReceita' value={component.qtdReceita} onChange={handleChange} />
                        </div>
                      </div>
                      <div className='col-sm-12'>
                        <div className='form-group'>
                          <label>Estoque inicial</label>
                          <input
                            type='number'
                            className='form-control'
                            name='estoqueInicial'
                            value={component.estoqueInicial}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='card-footer'>
                    <button type='submit' className='btn btn-info'>
                      Salvar
                    </button>
                    {/* <button type="submit" className="btn btn-default float-right">Cancel</button> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Componentes;
