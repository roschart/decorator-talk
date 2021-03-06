const expect = require('chai').expect
const {Cafe, Colacao, Orujo, Canela, Soja, Nata, Leche} = require('../bebidasMix.js')
describe('Mix', () => {
  describe('Precios de café y colacao', () => {
    describe('Bebidas simples', () => {
      it('Café', () => {
        expect(Cafe().precio()).to.equal(1)
      })
      it('Colacao', () => {
        expect(Colacao().precio()).to.equal(1.20)
      })
    })

    describe('Bebidas con complementos', () => {
      it('Carajillo', () => {
        expect(Cafe().add(Orujo).precio()).to.equal(2)
      })
      it('Colacao con canela', () => {
        expect(Colacao().add(Canela).precio()).to.be.closeTo(1.35, 0.001)
      })
      it('Todos los demas', () => {
        expect(Cafe().add(Soja).precio()).to.be.closeTo(1.20, 0.001)
        expect(Cafe().add(Leche).add(Nata).precio()).to.be.closeTo(1.60, 0.001)
        expect(Cafe().add(Leche).add(Leche).add(Nata).add(Orujo).precio()).to.be.closeTo(2.70, 0.001)
      })
    })
  })
})
