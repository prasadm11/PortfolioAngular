using Microsoft.EntityFrameworkCore;
using PortfolioManamagement.API.Models;
namespace PortfolioManamagement.API.Context
{
  public class AppDBContext : DbContext
  {
    public AppDBContext(DbContextOptions<AppDBContext> options) : base(options) { }

    //DBsets (tables)
    public DbSet<User> Users { get; set; }

    public DbSet<Contact> Contacts { get; set; }

  }
}
