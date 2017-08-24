const expect = require('chai').expect
const {Bebida} = require('../bebidaDecorator.js')
describe('Precios de café y colacao', () => {
  describe('Bebidas simples', () => {
    it('Café', () => {
      expect(Bebida().cafe().precio()).to.equal(1)
    })
    it('Colacao', () => {
      expect(Bebida().colacao().precio()).to.equal(1.20)
    })
  })

  // describe('Bebidas con complementos', () => {
  //   it('Carajillo', () => {
  //     expect(Bebida().cafe().conOrujo().precio()).to.equal(2)
  //   })
  //   it('Colacao con canela', () => {
  //     expect(Bebida().colacao().conCanela().precio()).to.be.closeTo(1.35, 0.001)
  //   })
  //   it('Todos los demas', () => {
  //     expect(Bebida().cafe().conSoja().precio()).to.be.closeTo(1.20, 0.001)
  //     expect(Bebida().cafe().conLeche().conNata().precio()).to.be.closeTo(1.60, 0.001)
  //     expect(Bebida().cafe().conLeche().conLeche().conNata().conOrujo().precio()).to.be.closeTo(2.70, 0.001)
  //   })
  // })
  //
  // describe('Metodo add', () => {
  //   expect(Bebida().cafe().add(leche).add(leche).add(nata).add(orujo).precio()).to.be.closeTo(2.70, 0.001)
  // })
})
