const expect = require('chai').expect
const { Cafe, Colacao, Orujo, Canela, Soja, Nata, Leche, add } = require('../bebidasData.js')
describe('Data oriented design', () => {
  describe('Precios de café y colacao', () => {
    describe('Bebidas simples', () => {
      it('Data object of Café', () => {
        expect(Cafe()).to.deep.equal({ bebida: "cafe", precio: 1.0 })
      })
      it('Price Café', () => {
        expect(Cafe().precio).to.equal(1)
      })
      it('Data object of Colacao', () => {
        expect(Colacao()).to.deep.equal({ bebida: "colacao", precio: 1.2 })
      })
      it('Price Colacao', () => {
        expect(Colacao().precio).to.equal(1.20)
      })
    })

    describe('Bebidas con complementos', () => {
      it('Carajillo', () => {
        expect(add(Cafe, Orujo)).to.deep.equal(
          {
            bebida: "combinado", precio: 2,
            base: { bebida: "cafe", precio: 1.0 },
            aditivos: [{ aditivo: "orujo", precio: 1 }]
          })
      })
      it('Colacao con canela', () => {
        expect(add(Colacao, Canela)).to.deep.equal(
          {
            bebida: "combinado", precio: 1.35,
            base: { bebida: "colacao", precio: 1.2 },
            aditivos: [{ aditivo: "canela", precio: 0.15 }]
          })
      })
      it('Todos los demas', () => {
        expect(add(Cafe, Soja)).to.deep.equal(
          {
            bebida: "combinado", precio: 1.2,
            base: { bebida: "cafe", precio: 1 },
            aditivos: [{ aditivo: "soja", precio: 0.2 }]
          })
        expect(add(Cafe, Leche, Nata)).to.deep.equal(
          {
            bebida: "combinado", precio: 1.60,
            base: { bebida: "cafe", precio: 1 },
            aditivos: [{ aditivo: "leche", precio: 0.10 },
            { aditivo: "nata", precio: 0.50 }]
          })
        expect(add(Cafe, Leche, Leche, Nata, Orujo)).to.deep.equal(
          {
            bebida: "combinado", precio: 2.70,
            base: { bebida: "cafe", precio: 1 },
            aditivos: [
              { aditivo: "leche", precio: 0.10 },
              { aditivo: "leche", precio: 0.10 },
              { aditivo: "nata", precio: 0.50 },
              { aditivo: "orujo", precio: 1 }]
          })
      })
    })
  })
})
