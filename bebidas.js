const coste = {
  cafe: 1,
  colacao: 1.20,
  orujo: 1,
  canela: 0.15,
  soja: 0.20,
  leche: 0.10,
  nata: 0.50
}

const Bebida = (precio = 0) => ({
  precio: () => precio,
  cafe: () => Bebida(coste.cafe),
  colacao: () => Bebida(coste.colacao),
  conOrujo: () => Bebida(precio + coste.orujo),
  conCanela: () => Bebida(precio + coste.canela),
  conSoja: () => Bebida(precio + coste.soja),
  conLeche: () => Bebida(precio + coste.leche),
  conNata: () => Bebida(precio + coste.nata),
  add: (aditivo) => Bebida(precio + aditivo())
})

module.exports.Bebida = Bebida
module.exports.nata = () => coste.nata
module.exports.orujo = () => coste.orujo
module.exports.canela = () => coste.canela
module.exports.soja = () => coste.soja
module.exports.leche = () => coste.leche
