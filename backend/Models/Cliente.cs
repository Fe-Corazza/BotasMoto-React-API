﻿using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Cliente
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Nome { get; set; }
        public string CPF { get; set; }
        public string Email { get; set; }
        public string Telefone { get; set; }
        public ICollection<Venda> Vendas { get; set; } = new List<Venda>();
    }
}
