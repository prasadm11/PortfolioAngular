using System.ComponentModel.DataAnnotations;

namespace PortfolioManamagement.API.Models
{
  public class User
  {
    [Key]
    public int Id { get; set; }

    [Required]
    public string FullName { get; set; }

    [Required]
    public string UserName { get; set; }

    [Required]
    public string Email { get; set; }

    [Required]
    public string Password { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
  }
}
