class No {
  constructor(valor) {
    this.valor = valor;         // valor do nó atual
    this.esquerda = null;       // ponteiro para o filho à esquerda
    this.direita = null;        // ponteiro para o filho à direita
  }
}

module.exports = No;
