using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Venda
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();
        public DateTime DataInicio { get; set; }
        public DateTime DataFim { get; set; }

        [ForeignKey("ProdutoId")]
        public Guid ProdutoId { get; set; }
        [ForeignKey("ClienteId")]
        public Guid ClienteId { get; set; }

        public Produto? Produto { get; set; }
        public Cliente? Cliente { get; set; }
    }
}
