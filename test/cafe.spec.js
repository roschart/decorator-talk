const expect = require('chai').expect
const Bebida = require('../bebidas.js')
describe('Precios de café y colacao', () => {
  describe('Bebidas simples', () => {
    it('Café', () => {
      expect(Bebida.Cafe().precio().to.equal(1))
    })
  })
})
