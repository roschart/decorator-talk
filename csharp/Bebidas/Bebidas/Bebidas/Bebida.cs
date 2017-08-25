using Bebidas.Aditivos;

namespace Bebidas.Bebidas
{
    public class Bebida
    {
        public Bebida(decimal precio) => Precio = precio;

        public decimal Precio { get; set; }
        public Bebida Add<T>() where T : Aditivo, new()
        {

            return new Bebida(Precio + new T().Precio);
        }
    }
}