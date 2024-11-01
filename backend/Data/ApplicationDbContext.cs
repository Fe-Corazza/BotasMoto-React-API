using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Data
{
    public class ApplicationDbContext : DbContext
    {
       public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
        public DbSet<backend.Models.Cliente> Cliente { get; set; } = default!;
        public DbSet<backend.Models.Fornecedor> Fornecedor { get; set; } = default!;
        public DbSet<backend.Models.Produto> Produto { get; set; } = default!;
        public DbSet<backend.Models.Venda> Venda { get; set; } = default!;
    }
}
