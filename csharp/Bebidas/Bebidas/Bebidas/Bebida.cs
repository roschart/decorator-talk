using Bebidas.Vendibles;

namespace Bebidas.Bebidas
{
    public class Bebida : IVendible
    {
        public Bebida(decimal precio) => Precio = precio;

        public decimal Precio { get; set; }
        public Bebida Add<T>() where T : IVendible, new()
        {

            return new Bebida(Precio + new T().Precio);
        }
    }
}