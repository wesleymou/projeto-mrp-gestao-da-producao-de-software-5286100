class Producao {
  demandas = [];
  estoque = [];
  lista = [];

  constructor(demandas, arvore) {
    this.demandas = demandas;

    this.lista = this.arvoreParaLista(arvore).reduce((acc, no) => (acc.some((n) => n.id === no.id) ? acc : [...acc, no]), []);

    this.lista.forEach((componente) => {
      this.estoque[componente.id] = [];
      for (let i = 0; i < demandas.length; i++) {
        this.estoque[componente.id][i] = {
          // ...componente,
          id: componente.id,
          nome: componente.item,
          estoqueInicial: i === 0 ? componente.estoqueInicial : undefined,
          necessidadesBrutas: 0,
          recebimentosProgramados: 0,
          estoqueProjetado: 0,
          ordemRecebimento: 0,
          ordemPlanejamento: 0,
        };
      }
    });

    for (let i = 0; i < demandas.length; i++) {
      this.requisitarComponente(arvore, demandas[i], i);
    }
  }

  calcularEstoqueAtual(componente, periodo) {
    if (periodo === 0)
      return (
        this.estoque[componente.id][periodo].estoqueInicial +
        this.estoque[componente.id][periodo].ordemRecebimento +
        this.estoque[componente.id][periodo].recebimentosProgramados
      );
    else
      return (
        this.estoque[componente.id][periodo - 1].estoqueProjetado +
        this.estoque[componente.id][periodo].ordemRecebimento +
        this.estoque[componente.id][periodo].recebimentosProgramados
      );
  }

  calcularLote(componente, qtd) {
    if (componente.minLote === 0) return qtd;
    return Math.ceil(qtd / componente.minLote) * componente.minLote;
  }

  requisitarComponente = (componente, demanda, periodo) => {
    const componenteEstocado = this.estoque[componente.id][periodo];

    const componenteDemanda = demanda * (componente.qtdReceita || 1) + componenteEstocado.necessidadesBrutas;
    const componenteDemandaSeguranca = componenteDemanda + componente.estoqueSeguranca;
    const quantidadeDisponivel = this.calcularEstoqueAtual(componente, periodo);
    const lote = this.calcularLote(componente, componenteDemandaSeguranca);

    componenteEstocado.necessidadesBrutas = componenteDemanda;

    if (componenteDemandaSeguranca > quantidadeDisponivel) {
      if (componente.leadtime > periodo) {
        componenteEstocado.recebimentosProgramados = lote;
        componenteEstocado.estoqueProjetado = quantidadeDisponivel + lote - componenteDemanda;
      } else {
        this.estoque[componente.id][periodo - componente.leadtime].ordemPlanejamento = lote;
        this.estoque[componente.id][periodo].ordemRecebimento = lote;
        componenteEstocado.estoqueProjetado = quantidadeDisponivel + lote - componenteDemanda;
      }
      componente.dependencias.forEach((dependencia) => this.requisitarComponente(dependencia, componenteDemanda, periodo));
    } else {
      componenteEstocado.estoqueProjetado = quantidadeDisponivel - componenteDemanda;
    }
  };

  arvoreParaLista(no) {
    const dependencias = [];
    no.dependencias.forEach((dependencia) => dependencias.push(...this.arvoreParaLista(dependencia)));
    return [no, ...dependencias];
  }

  calcular() {
    return this.estoque;
  }

  pegarLista() {
    return this.lista;
  }
}

export default Producao;
