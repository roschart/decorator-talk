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
})
