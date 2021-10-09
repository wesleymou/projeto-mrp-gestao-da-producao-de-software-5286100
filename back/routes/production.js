var express = require('express');
var router = express.Router();

/* GET receita de produção. */
router.get('/getProduction', function(req, res, next) {
  res.json(receita);
});

module.exports = router;

const receita = {
    item: 'Lapiseira P207',
    leadtime: 1,
    formaObtencao: 'Produzido',
    minLote: 0,
    estoqueSeguranca: 0,
    estoqueInicial: 0,
    unidade: 'qtd',
    dependencias: [
      {
        item: 'Corpo externo 207',
        leadtime: 2,
        formaObtencao: 'Produzido',
        minLote: 500,
        estoqueSeguranca: 0,
        estoqueInicial: 0,
        unidade: 'qtd',
        qtdReceita: 1,
        dependencias: [
          {
            item: 'Plástico ABS',
            leadtime: 1,
            formaObtencao: 'Comprado',
            minLote: 50,
            estoqueSeguranca: 0,
            estoqueInicial: 0,
            unidade: 'g',
            qtdReceita: 10
          },
          {
            item: 'Corante azul',
            leadtime: 2,
            formaObtencao: 'Comprado',
            minLote: 50,
            estoqueSeguranca: 0,
            estoqueInicial: 0,
            unidade: 'g',
            qtdReceita: 0.01
          }
        ]
      },
      {
        item: 'Presilha de bolso',
        leadtime: 1,
        formaObtencao: 'Comprado',
        minLote: 50,
        estoqueSeguranca: 0,
        estoqueInicial: 0,
        unidade: 'qtd',
        qtdReceita: 1
      },
      {
        item: 'Miolo 207',
        leadtime: 1,
        formaObtencao: 'Produzido',
        minLote: 500,
        estoqueSeguranca: 0,
        estoqueInicial: 0,
        unidade: 'qtd',
        qtdReceita: 1,
        dependencias: [
          {
            item: 'Borracha',
            leadtime: 1,
            formaObtencao: 'Produzido',
            minLote: 0,
            estoqueSeguranca: 0,
            estoqueInicial: 0,
            unidade: 'qtd',
            qtdReceita: 1,
            dependencias: [
              {
                item: 'Fio de borracha',
                leadtime: 1,
                formaObtencao: 'Comprado',
                minLote: 50,
                estoqueSeguranca: 0,
                estoqueInicial: 0,
                unidade: 'cm',
                qtdReceita: 2,
              }
            ]
          },
          {
            item: 'Capa da borracha',
            leadtime: 1,
            formaObtencao: 'Produzido',
            minLote: 0,
            estoqueSeguranca: 0,
            estoqueInicial: 0,
            unidade: 'qtd',
            qtdReceita: 1,
            dependencias: [
              {
                item: 'Tira 0.1mm',
                leadtime: 1,
                formaObtencao: 'Comprado',
                minLote: 50,
                estoqueSeguranca: 0,
                estoqueInicial: 0,
                unidade: 'g',
                qtdReceita: 2,
              }
            ]
          },
          {
            item: 'Miolo interno 207',
            leadtime: 3,
            formaObtencao: 'Produzido',
            minLote: 0,
            estoqueSeguranca: 0,
            estoqueInicial: 0,
            unidade: 'qtd',
            qtdReceita: 1,
            dependencias: [
              {
                item: 'Mola',
                leadtime: 1,
                formaObtencao: 'Comprado',
                minLote: 50,
                estoqueSeguranca: 0,
                estoqueInicial: 0,
                unidade: 'qtd',
                qtdReceita: 1
              },
              {
                item: 'Corpo do miolo',
                leadtime: 2,
                formaObtencao: 'Produzido',
                minLote: 0,
                estoqueSeguranca: 0,
                estoqueInicial: 0,
                unidade: 'qtd',
                qtdReceita: 1,
                dependencias: [
                  {
                    item: 'Plástico ABS',
                    leadtime: 1,
                    formaObtencao: 'Comprado',
                    minLote: 50,
                    estoqueSeguranca: 0,
                    estoqueInicial: 0,
                    unidade: 'g',
                    qtdReceita: 7,
                  },
                  {
                    item: 'Corante preto',
                    leadtime: 2,
                    formaObtencao: 'Comprado',
                    minLote: 50,
                    estoqueSeguranca: 0,
                    estoqueInicial: 0,
                    unidade: 'g',
                    qtdReceita: 0.05
                  }
                ]
              },
              {
                item: 'Suporte da garra',
                leadtime: 2,
                formaObtencao: 'Comprado',
                minLote: 50,
                estoqueSeguranca: 0,
                estoqueInicial: 0,
                unidade: 'qtd',
                qtdReceita: 1
              },
              {
                item: 'Capa da garra',
                leadtime: 3,
                formaObtencao: 'Comprado',
                minLote: 50,
                estoqueSeguranca: 0,
                estoqueInicial: 0,
                unidade: 'qtd',
                qtdReceita: 1
              },
              {
                item: 'Garras',
                leadtime: 1,
                formaObtencao: 'Comprado',
                minLote: 50,
                estoqueSeguranca: 0,
                estoqueInicial: 0,
                unidade: 'qtd',
                qtdReceita: 3
              }
            ]
          },
          {
            item: 'Grafite 0.7mm',
            leadtime: 2,
            formaObtencao: 'Comprado',
            minLote: 50,
            estoqueSeguranca: 0,
            estoqueInicial: 0,
            unidade: 'qtd',
            qtdReceita: 4
          }
        ]
      },
      {
        item: 'Corpo da ponteira',
        leadtime: 2,
        formaObtencao: 'Comprado',
        minLote: 50,
        estoqueSeguranca: 0,
        estoqueInicial: 0,
        unidade: 'qtd',
        qtdReceita: 1
      },
      {
        item: 'Guia da ponteira',
        leadtime: 1,
        formaObtencao: 'Comprado',
        minLote: 50,
        estoqueSeguranca: 0,
        estoqueInicial: 0,
        unidade: 'qtd',
        qtdReceita: 1
      },
      {
        item: 'Tampa',
        leadtime: 1,
        formaObtencao: 'Produzido',
        minLote: 500,
        estoqueSeguranca: 0,
        estoqueInicial: 0,
        unidade: 'qtd',
        qtdReceita: 1,
        dependencias: [
          {
            item: 'Tira 0.1mm',
            leadtime: 1,
            formaObtencao: 'Comprado',
            minLote: 50,
            estoqueSeguranca: 0,
            estoqueInicial: 0,
            unidade: 'g',
            qtdReceita: 2
          }
        ]
      }
    ]
  };
  