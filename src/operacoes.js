function dfsPreOrdem(no) {
  if (!no) return;                    // se o nó for nulo, não faz nada

  console.log(no.valor);             // visita o nó atual primeiro
  dfsPreOrdem(no.esquerda);          // depois visita o filho da esquerda
  dfsPreOrdem(no.direita);           // e, por fim, o da direita
}

function contemValor(no, alvo) {
  if (!no) return false;               // se o nó for nulo, retorna falso

  if (no.valor === alvo) return true;  // se o valor for encontrado, retorna verdadeiro

  return contemValor(no.esquerda, alvo) || contemValor(no.direita, alvo);
}

function altura(no) {
  if (!no) return 0;                             // nó nulo contribui com altura 0

  const alturaEsquerda = altura(no.esquerda);   // calcula altura da subárvore esquerda
  const alturaDireita = altura(no.direita);     // calcula altura da subárvore direita

  return 1 + Math.max(alturaEsquerda, alturaDireita);  // retorna a maior altura + 1 do nó atual
}

function contarNos(no) {
  if (!no) return 0;                                  // o nó nulo não conta

  return 1 + contarNos(no.esquerda) + contarNos(no.direita);
}

function ehSimetrica(raiz) {
  function comparar(a, b) {
    if (!a && !b) return true;                     // se ambos forem nulos, significa que são simétricos
    if (!a || !b || a.valor !== b.valor) return false; // só um nulo ou valores diferentes = não simétrico

    return comparar(a.esquerda, b.direita) && comparar(a.direita, b.esquerda);
  }

  if (!raiz) return true;                         // a árvore vazia é simétrica

  return comparar(raiz.esquerda, raiz.direita);
}

function valorMinimo(no) {
  if (!no) return null;                    // a árvore vazia não tem valor mínimo

  while (no.esquerda) {
    no = no.esquerda;                      // o menor valor está sempre no extremo esquerdo
  }

  return no.valor;
}

module.exports = { dfsPreOrdem, contemValor, altura, contarNos, ehSimetrica, valorMinimo };
