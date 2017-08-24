const coste = {
  cafe: 1,
  colacao: 1.20,
  orujo: 1,
  canela: 0.15,
  soja: 0.20,
  leche: 0.10,
  nata: 0.50
}

const Cafe = () => ({precio: () => coste.cafe})
const Colacao = () => ({precio: () => coste.colacao})

const Orujo = bebida => ({ precio: () => bebida.precio() + coste.orujo })
const Canela = bebida => ({ precio: () => bebida.precio() + coste.canela })
const Soja = bebida => ({ precio: () => bebida.precio() + coste.soja })
const Leche = bebida => ({ precio: () => bebida.precio() + coste.leche })
const Nata = bebida => ({ precio: () => bebida.precio() + coste.nata })

const addTodDrik = (aditivo, bebida) => ({precio: () => aditivo(bebida).precio()})

module.exports = {Cafe, Colacao, Orujo, Canela, Soja, Leche, Nata, addTodDrik}
