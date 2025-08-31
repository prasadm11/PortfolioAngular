using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
namespace PortfolioManamagement.API.Models
{
  public class Contact
  {
    [BsonId] // tells Mongo this is the document ID
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }

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
