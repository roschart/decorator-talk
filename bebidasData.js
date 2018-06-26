const bebidas = {
  cafe: { bebida: "cafe", precio: 1 },
  colacao: { bebida: "colacao", precio: 1.2 },
  orujo: { aditivo: "orujo", precio: 1 },
  canela: 0.15,
  soja: 0.20,
  leche: 0.10,
  nata: 0.50
}

const Cafe = () => bebidas.cafe
const Colacao = () => bebidas.colacao
const Orujo = () => bebidas.orujo

const add = (bebida, ...adits) => {
  let base = bebida()
  let aditivos=adits.map(a=>a())
  let precio= base.precio + aditivos.reduce((acc, a)=> acc + a.precio, 0)
  return { bebida: "combinado",precio, base, aditivos }
}

// const Canela = bebida => Bebida(bebida.precio() + coste.canela)
// const Soja = bebida => Bebida(bebida.precio() + coste.soja)
// const Leche = bebida => Bebida(bebida.precio() + coste.leche)
// const Nata = bebida => Bebida(bebida.precio() + coste.nata)

// module.exports = {Cafe, Colacao, Orujo, Canela, Soja, Leche, Nata}

module.exports = { Cafe, Colacao, add, Orujo }
