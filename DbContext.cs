using Microsoft.EntityFrameworkCore;
using CrudAspAngular.Models;

namespace CrudAspAngular
{
  public class ApplicationDbContext : DbContext
  {
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
    public DbSet<Produtos> Produtos { get; set; }

  }
}
