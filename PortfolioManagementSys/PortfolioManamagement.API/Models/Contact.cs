using System.ComponentModel.DataAnnotations;

namespace PortfolioManamagement.API.Models
{
  public class Contact
  {
    [Key]
    public int Id { get; set; }

    [Required]
    [MaxLength(150)]
    public string Name { get; set; }

    [Required]
    [MaxLength(150)]
    [EmailAddress]
    public string Email { get; set; }

    [Required]
    [MaxLength(2000)]
    public string Message { get; set; }

    public DateTime CreatedOn { get; set; } = DateTime.UtcNow;
  }
}
