using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Fornecedor
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid(); // ID do fornecedor
        public string Nome { get; set; } // Nome do fornecedor
        public string NomeEmpresa { get; set; } // Nome da empresa
        public string CpfCnpj { get; set; } // CPF ou CNPJ
        public string Endereco { get; set; } // Endereço
        public string Telefone { get; set; } // Telefone
        public string Email { get; set; } // Email
        public DateTime DataCadastro { get; set; } // Data de cadastro
        public ICollection<Produto> Produtos { get; set; } = new List<Produto>();

    }
}
