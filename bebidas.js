exports.Bebida = () => ({
  cafe: () => ({
    precio: () => 1,
    conOrujo: () => ({precio: () => 2})
  }),
  colacao: () => ({precio: () => 1.20})
})
