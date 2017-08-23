const Bebida = (precio = 0) => ({
  precio: () => precio,
  cafe: () => Bebida(1),
  colacao: () => Bebida(1.20),
  conOrujo: () => Bebida(precio + 1),
  conCanela: () => Bebida(precio + 0.15)
})

module.exports.Bebida = Bebida
