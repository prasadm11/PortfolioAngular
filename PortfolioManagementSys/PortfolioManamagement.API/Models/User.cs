using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace PortfolioManamagement.API.Models
{
  public class User
  {
    [BsonId] // tells Mongo this is the document ID
    [BsonRepresentation(BsonType.ObjectId)] // stores as ObjectId in DB but lets you use string in C#
    public string Id { get; set; }

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
