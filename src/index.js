const ArvoreBinaria = require('./ArvoreBinaria');
const { dfsPreOrdem, altura, contemValor } = require('../operacoes');

const arvore = new ArvoreBinaria();
arvore.inserir(10);
arvore.inserir(5);
arvore.inserir(15);

dfsPreOrdem(arvore.raiz);
console.log('Altura:', altura(arvore.raiz));
console.log('Contém 15?', contemValor(arvore.raiz, 15));
