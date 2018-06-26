const expect = require('chai').expect
const { Cafe, Colacao, Orujo, Canela, Soja, Nata, Leche } = require('../bebidasData.js')
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
      it('Carajillo Data', () => {
        expect(Add(Cafe, Orujo)).to.deep.equal({ bebida: "combinado", precio: 2, base: { bebida: { bebida: "cafe", precio: 1.0 } }, aditivos: [{ aditivo: "orujo", precio: 1 }] })
      })
      // it('Colacao con canela', () => {
      //   expect(Colacao().add(Canela).precio()).to.be.closeTo(1.35, 0.001)
      // })
      // it('Todos los demas', () => {
      //   expect(Cafe().add(Soja).precio()).to.be.closeTo(1.20, 0.001)
      //   expect(Cafe().add(Leche).add(Nata).precio()).to.be.closeTo(1.60, 0.001)
      //   expect(Cafe().add(Leche).add(Leche).add(Nata).add(Orujo).precio()).to.be.closeTo(2.70, 0.001)
      // })
    })
  })
})
