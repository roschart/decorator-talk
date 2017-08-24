const expect = require('chai').expect
const {Cafe, Colacao, Orujo, Canela, Soja, Nata, Leche} = require('../bebidasMix.js')
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
      expect(Cafe().Add(Orujo).precio()).to.equal(2)
    })
    it('Colacao con canela', () => {
      expect(Colacao().Add(Canela).precio()).to.be.closeTo(1.35, 0.001)
    })
    it('Todos los demas', () => {
      expect(Cafe().Add(Soja).precio()).to.be.closeTo(1.20, 0.001)
      expect(Cafe().Add(Nata).precio()).to.be.closeTo(1.60, 0.001)
      expect(Cafe().Add(Leche).Add(Leche).Add(Nata).Add(Orujo).precio()).to.be.closeTo(2.70, 0.001)
    })
  })
})
