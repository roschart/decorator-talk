using Bebidas.Aditivos;
using Bebidas.Bebidas;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Bebidas
{
    [TestClass]
    public class BebidasTest
    {
        [TestMethod]
        public void Cafe()
        {
            Assert.AreEqual(new Cafe().Precio, Coste.Cafe);
        }
        [TestMethod]
        public void Colacao()
        {
            Assert.AreEqual(new Colacao().Precio, Coste.Colcacao);
        }
        [TestMethod]
        public void Carajillo()
        {
            Assert.AreEqual(new Cafe().Add<Orujo>().Precio, 2M);
        }
        [TestMethod]
        public void ColacaConCanela()
        {
            Assert.AreEqual(new Colacao().Add<Canela>().Precio, 1.35M);
        }
        [TestMethod]
        public void DesayunoJose()
        {
            Assert.AreEqual(new Cafe().Add<Soja>().Precio, 1.20M);
        }
        [TestMethod]
        public void Vienes()
        {
            Assert.AreEqual(new Cafe().Add<Leche>().Add<Nata>().Precio, 1.60M);
        }
        [TestMethod]
        public void Especial()
        {
            Assert.AreEqual(new Cafe().Add<Leche>().Add<Leche>().Add<Nata>().Add<Orujo>().Precio, 2.70M);
        }
        [TestMethod]
        public void EspecialDobleShoot()
        {
            Assert.AreEqual(new Cafe().Add<Cafe>().Add<Leche>().Add<Leche>().Add<Nata>().Add<Orujo>().Precio, 3.70M);
        }

    }
}
