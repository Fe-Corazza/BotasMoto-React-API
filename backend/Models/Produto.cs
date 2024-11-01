﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class Produto
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public decimal Preco {  get; set; }
        public decimal Qtde { get; set; }
        [ForeignKey("FornecedorId")]
        public Guid FornecedorId { get; set; }
        public Fornecedor? Fornecedor { get; set; }

    }
}
