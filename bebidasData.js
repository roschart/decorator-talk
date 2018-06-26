const bebidas = {
  cafe: { bebida: "cafe", precio: 1 },
  colacao: { bebida: "colacao", precio: 1.2 },
  orujo: { aditivo: "orujo", precio: 1 },
  canela: { aditivo: "canela", precio: 0.15},
  soja: { aditivo: "soja", precio: 0.20},
  leche: { aditivo: "leche", precio: 0.10},
  nata: { aditivo: "nata", precio: 0.50}
}

const Cafe = () => bebidas.cafe
const Colacao = () => bebidas.colacao
const Orujo = () => bebidas.orujo
const Canela = () => bebidas.canela
const Soja = () => bebidas.soja
const Leche = () => bebidas.leche
const Nata = () => bebidas.nata

const add = (bebida, ...adits) => {
  let base = bebida()
  let aditivos=adits.map(a=>a())
  let precio= base.precio + aditivos.reduce((acc, a)=> acc + a.precio, 0)
  precio=Number(precio.toFixed(2))
  return { bebida: "combinado",precio, base, aditivos }
}


module.exports = {Cafe, Colacao, Orujo, Canela, Soja, Leche, Nata,add}