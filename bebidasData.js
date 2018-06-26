const bebidas = {
  cafe: {bebida: "cafe", precio: 1},
  colacao: {bebida: "colacao", precio: 1.2},
  orujo: 1,
  canela: 0.15,
  soja: 0.20,
  leche: 0.10,
  nata: 0.50
}

const Cafe = () => bebidas.cafe
const Colacao = () => bebidas.colacao

// const Orujo = bebida => Bebida(bebida.precio() + coste.orujo)
// const Canela = bebida => Bebida(bebida.precio() + coste.canela)
// const Soja = bebida => Bebida(bebida.precio() + coste.soja)
// const Leche = bebida => Bebida(bebida.precio() + coste.leche)
// const Nata = bebida => Bebida(bebida.precio() + coste.nata)

// module.exports = {Cafe, Colacao, Orujo, Canela, Soja, Leche, Nata}

module.exports = {Cafe, Colacao}
