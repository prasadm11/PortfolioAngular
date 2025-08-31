using Microsoft.EntityFrameworkCore;
using MongoDB.Driver;
using PortfolioManamagement.API.Context;
using PortfolioManamagement.API.Models;
using PortfolioManamagement.API.Repositories.Interface;

namespace PortfolioManamagement.API.Repositories.Implementation
{
  public class UserRepository : IUserRepository
  {
    //private readonly AppDBContext _context;
    private readonly MongoDbContext _context;
    public UserRepository(MongoDbContext context)
    {
      _context = context;
    }
    public async Task<User> AddUserAsync(User user)
    {
      await _context.Users.InsertOneAsync(user);
      return user;
    }

    public async Task<IEnumerable<User>> GetAllUsersAsync()
    {
      return await _context.Users.Find(_ => true).ToListAsync();
    }

    public async Task<User?> GetUserByIdAsync(string id)
    {
      //return await _context.Users.FindAsync(id);
      return await _context.Users.Find(u => u.Id == id).FirstOrDefaultAsync();
    }

    public async Task<User?> UpdateUserAsync(User user)
    {
      var result = await _context.Users.ReplaceOneAsync(u => u.Id == user.Id, user);
      if (result.MatchedCount == 0) return null;
      return user;
    }

    public async Task<bool> DeleteUserAsync(string id)
    {
      var result = await _context.Users.DeleteOneAsync(u => u.Id == id);
      return result.DeletedCount > 0;
    }
  }
}
