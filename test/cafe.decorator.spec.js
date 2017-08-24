const expect = require('chai').expect
const {Cafe, Colacao, Orujo, Canela, Soja, Leche, Nata, addTodDrik} = require('../bebidasDecorator.js')
describe('DECORATOR:Precios de café y colacao', () => {
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
      expect(Orujo(Cafe()).precio()).to.equal(2)
    })
    it('Colacao con canela', () => {
      expect(Canela(Colacao()).precio()).to.be.closeTo(1.35, 0.001)
    })
    it('Todos los demas', () => {
      expect(Soja(Cafe()).precio()).to.be.closeTo(1.20, 0.001)
      expect(Nata(Leche(Cafe())).precio()).to.be.closeTo(1.60, 0.001)
      expect(Orujo(Nata(Leche(Leche(Cafe())))).precio()).to.be.closeTo(2.70, 0.001)
    })
  })
  describe('Metodo add', () => {
    it('add', () => {
      expect(addTodDrik(Orujo, addTodDrik(Nata, addTodDrik(Leche, addTodDrik(Leche, Cafe())))).precio()).to.be.closeTo(2.70, 0.001)
    })
  })
})
