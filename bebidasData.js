const Cafe = () => ({ bebida: "cafe", precio: 1 })
const Colacao = () => ({ bebida: "colacao", precio: 1.2 })
const Orujo = () => ({ aditivo: "orujo", precio: 1 })
const Canela = () => ({ aditivo: "canela", precio: 0.15})
const Soja = () => ({ aditivo: "soja", precio: 0.20})
const Leche = () => ({ aditivo: "leche", precio: 0.10})
const Nata = () => ({ aditivo: "nata", precio: 0.50})

const add = (bebida, ...adits) => {
  let base = bebida()
  let aditivos=adits.map(a=>a())
  let precio= base.precio + aditivos.reduce((acc, a)=> acc + a.precio, 0)
  precio=Number(precio.toFixed(2))
  return { bebida: "combinado",precio, base, aditivos }
}


module.exports = {Cafe, Colacao, Orujo, Canela, Soja, Leche, Nata,add}