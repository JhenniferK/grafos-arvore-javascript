const No = require('../No');

class ArvoreBinaria {
  constructor() {
    this.raiz = null;           // inicia com a árvore vazia
  }

  inserir(valor) {
    const novoNo = new No(valor); // é criado um novo nó com o valor passado

    if (!this.raiz) {             // se a raiz for nula, esse nó será a raiz
      this.raiz = novoNo;
      return;
    }

    let atual = this.raiz;
    while (true) {
      if (valor < atual.valor) {        // se o valor for menor, vai para a esquerda
        if (!atual.esquerda) {
          atual.esquerda = novoNo;      // se não tiver filho à esquerda, insere aqui
          return;
        }
        atual = atual.esquerda;
      } else {
        if (!atual.direita) {           // se for maior ou igual, vai para a direita
          atual.direita = novoNo;
          return;
        }
        atual = atual.direita;
      }
    }
  }
}

module.exports = ArvoreBinaria;
