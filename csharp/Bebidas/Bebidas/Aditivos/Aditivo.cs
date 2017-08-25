using Bebidas.Bebidas;

namespace Bebidas.Aditivos
{
    public class Aditivo
    {

        public Aditivo(decimal precio) => Precio = precio;

        public decimal Precio { get; set; }
    }
}