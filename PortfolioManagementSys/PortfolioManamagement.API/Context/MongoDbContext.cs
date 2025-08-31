using MongoDB.Driver;
using PortfolioManamagement.API.Models;
namespace PortfolioManamagement.API.Context
{
  public class MongoDbContext
  {
    private readonly IMongoDatabase _database;

    public MongoDbContext(IConfiguration configuration)
    {
      var client = new MongoClient(configuration["MongoDB:ConnectionString"]);
      _database = client.GetDatabase(configuration["MongoDB:DatabaseName"]);
    }

    // Collections
    public IMongoCollection<User> Users =>
        _database.GetCollection<User>("Users");

    public IMongoCollection<Contact> Contacts =>
        _database.GetCollection<Contact>("Contacts");
  }
}

