import React, { useEffect, useState } from 'react';
import Select from 'react-select';

const Componentes = (/* {Component} */) => {
  const [component, setComponent] = useState({
    item: '',
    leadtime: '',
    minLote: '',
    estoqueSeguranca: '',
    qtdReceita: '',
    estoqueInicial: '',
    formaObtencao: '',
    unidade: ''
  });

  useEffect(() => {
    // setComponent(Component)
  }, []);

  const handleChange = (e) => {
    // @ts-ignore
    setComponent({ [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className='modal fade' id='modal-default'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            {/* <div className="modal-header">
              <h4 className="modal-title">Default Modal</h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>One fine body&hellip;</p>
            </div>
            <div className="modal-footer justify-content-between">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div> */}
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
                    <div className='col-sm-12'>
                      <div className='form-group'>
                        <label>Unidade</label>
                        {/* <input type='number' className='form-control' name='qtdReceita' value={component.qtdReceita} onChange={handleChange} /> */}
                        <select className='custom-select' name='unidade' value={component.unidade} onChange={handleChange}>
                          <option disabled selected></option>
                          <option value=''>qtd</option>
                          <option value=''>g</option>
                          <option value=''>cm</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card-footer' style={{ backgroundColor: 'transparent' }}>
                  <button type='submit' className='btn btn-info'>
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
