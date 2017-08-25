using Bebidas.Vendibles;

namespace Bebidas.Aditivos
{
    public class Aditivo:IVendible
    {

        public Aditivo(decimal precio) => Precio = precio;

        public decimal Precio { get; set; }
    }
}