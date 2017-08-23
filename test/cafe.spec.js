const expect = require('chai').expect
const {Bebida} = require('../bebidas.js')
describe('Precios de café y colacao', () => {
  describe('Bebidas simples', () => {
    it('Café', () => {
      expect(Bebida().cafe().precio()).to.equal(1)
    })
    it('Colacao', () => {
      expect(Bebida().colacao().precio()).to.equal(1.20)
    })
  })

  describe('Bebidas con complementos', () => {
    it('Carajillo', () => {
      expect(Bebida().cafe().conOrujo().precio()).to.equal(2)
    })
    it('Colacao con canela', () => {
      expect(Bebida().colacao().conCanela().precio()).to.be.closeTo(1.35, 0.001)
    })
  })
})
