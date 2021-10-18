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
          ...(i === 0 ? { ...componente, estoqueInicialComprometido: 0 } : undefined),
          id: componente.id,
          nome: componente.item,
          necessidadesBrutas: 0,
          recebimentosProgramados: 0,
          estoqueProjetado: 0,
          ordemRecebimento: 0,
          ordemPlanejamento: 0,
          // estoqueFaltante: [],
        };
      }
    });

    this.requisitarComponente({ componente: arvore, demandas: demandas });
  }

  calcularEstoqueAtual(componente, periodo) {
    if (periodo === 0)
      return (
        this.estoque[componente.id][0].estoqueInicial +
        this.estoque[componente.id][0].ordemRecebimento +
        this.estoque[componente.id][0].recebimentosProgramados
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

  normalizarTabela = (componente, periodo) => {
    for (let index = 0; index < periodo; index++) {
      this.estoque[componente.id][i];
    }
  };

  requisitarComponente = ({ componente, demandas }) => {
    const novasDemandas = new Array(demandas.length).fill(0);

    for (let periodo = 0; periodo < demandas.length; periodo++) {
      const quantidadeDisponivel = this.calcularEstoqueAtual(componente, periodo);
      const componenteDemanda = demandas[periodo] * (componente.qtdReceita || 1) + this.estoque[componente.id][periodo].necessidadesBrutas;
      const componenteDemandaSeguranca = componenteDemanda + componente.estoqueSeguranca;

      this.estoque[componente.id][periodo].necessidadesBrutas = componenteDemanda;

      if (quantidadeDisponivel >= componenteDemandaSeguranca) {
        this.estoque[componente.id][periodo].estoqueProjetado = quantidadeDisponivel - componenteDemandaSeguranca;
      } else {
        const lote = this.calcularLote(componente, componenteDemandaSeguranca - quantidadeDisponivel);

        if (componente.leadtime < periodo + 1) {
          novasDemandas[periodo - componente.leadtime] = lote;

          this.estoque[componente.id][periodo].ordemRecebimento = lote;
          this.estoque[componente.id][periodo - componente.leadtime].ordemPlanejamento = lote;

          this.estoque[componente.id][periodo].estoqueProjetado = (quantidadeDisponivel + lote) - componenteDemandaSeguranca;
        } else {
          // novasDemandas[0] = lote;

          this.estoque[componente.id][periodo].estoqueProjetado = (quantidadeDisponivel) - componenteDemandaSeguranca;
        }
      }
    }

    componente.dependencias.forEach((dependencia) => this.requisitarComponente({ componente: dependencia, demandas: novasDemandas }));

    // const quantidadeDisponivel = this.calcularEstoqueAtual(componente, periodo);

    // const componenteDemanda = demanda * (componente.qtdReceita || 1)
    // const componenteDemandaSeguranca = componenteDemanda + componente.estoqueSeguranca;

    // if (componenteDemandaSeguranca > quantidadeDisponivel) {
    //   if (componente.leadtime > (periodo - leadtime)) {
    //     throw new Error(
    //       <div>
    //     <div>Problemas de estoque!</div>
    //     <div>Componente: {componente.item}</div>
    //     <div>Período: {periodo}</div>
    //     </div>
    //     )
    //   } else {
    //     componente.necessidadesBrutas += componenteDemanda
    // const lote = this.calcularLote(componente, componenteDemandaSeguranca - quantidadeDisponivel);

    //     componente.dependencias.forEach((dependencia) =>
    //       this.requisitarComponente(dependencia, lote, periodo - componente.leadtime, componente.leadtime, periodoAtual)
    //     );
    //   }
    // } else {

    // }

    // const quantidadeDisponivel = this.calcularEstoqueAtual(componente, periodo);
    // const componenteDemanda = demanda * (componente.qtdReceita || 1) + this.estoque[componente.id][periodo].necessidadesBrutas;
    // const componenteDemandaSeguranca = componenteDemanda + componente.estoqueSeguranca;

    // if (componenteDemandaSeguranca > quantidadeDisponivel) {

    // } else {
    //   this.estoque[componente.id][periodo].estoqueProjetado = quantidadeDisponivel - componenteDemanda;
    //   return
    // }

    // const quantidadeDisponivel = this.calcularEstoqueAtual(componente, periodo);

    // const componenteDemanda = demanda * (componente.qtdReceita || 1);
    // const componenteDemandaSeguranca = componenteDemanda + componente.estoqueSeguranca + ;
    // const lote = this.calcularLote(componente, componenteDemandaSeguranca - quantidadeDisponivel);

    // this.estoque[componente.id][periodo].necessidadesBrutas += componenteDemanda

    // if (componenteDemandaSeguranca > quantidadeDisponivel) {
    //   if (componente.leadtime > periodo) {
    //     this.estoque[componente.id][periodo].estoqueProjetado += quantidadeDisponivel + lote - componenteDemanda;

    //     this.estoque[componente.id][periodo].estoqueFaltante.push({ periodo: periodoAtual, estoque: componenteDemanda });
    //   } else {
    //     this.estoque[componente.id][periodo - componente.leadtime].ordemPlanejamento += lote;
    //     this.estoque[componente.id][periodo].ordemRecebimento += lote;
    //     this.estoque[componente.id][periodo].estoqueProjetado += quantidadeDisponivel + lote - componenteDemanda;

    //     componente.dependencias.forEach((dependencia) =>
    //       this.requisitarComponente(dependencia, componenteDemanda, periodo - componente.leadtime, componente.leadtime, periodoAtual)
    //     );
    //   }
    // } else {
    //   this.estoque[componente.id][periodo].estoqueProjetado = quantidadeDisponivel - componenteDemanda;
    // }

    // if (periodo < 0) {
    //   this.estoque[componente.id][0].estoqueInicial -=
    // }

    // const componenteEstocado = this.estoque[componente.id][periodo];

    // const componenteDemanda = demanda * (componente.qtdReceita || 1) + componenteEstocado.necessidadesBrutas;
    // const componenteDemandaSeguranca = componenteDemanda + componente.estoqueSeguranca;
    // const quantidadeDisponivel = this.calcularEstoqueAtual(componente, periodo);
    // const lote = this.calcularLote(componente, componenteDemandaSeguranca - quantidadeDisponivel);

    // if (periodoR < 0)
    // componenteEstocado.estoqueInicial -= componenteDemanda
    // else
    // componenteEstocado.necessidadesBrutas = componenteDemanda;

    // if (componenteDemandaSeguranca > quantidadeDisponivel) {
    //   if (componente.leadtime > periodo) {
    //     // componenteEstocado.estoqueInicial -= lote;
    //     componenteEstocado.estoqueInicial -= componenteDemanda
    //     componenteEstocado.estoqueProjetado = quantidadeDisponivel + lote - componenteDemanda;
    //   } else {
    //     this.estoque[componente.id][periodo - componente.leadtime].ordemPlanejamento = lote;
    //     this.estoque[componente.id][periodo].ordemRecebimento = lote;
    //     componenteEstocado.estoqueProjetado = quantidadeDisponivel + lote - componenteDemanda;
    //   }
    //   componente.dependencias.forEach((dependencia) =>
    //     this.requisitarComponente(dependencia, componenteDemanda, periodo - leadtime, componente.leadtime)
    //   );
    // } else {
    //   componenteEstocado.estoqueProjetado = quantidadeDisponivel - componenteDemanda;
    // }
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
