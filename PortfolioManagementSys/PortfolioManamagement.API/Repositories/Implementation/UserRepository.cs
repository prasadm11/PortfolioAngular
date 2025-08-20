using Microsoft.EntityFrameworkCore;
using PortfolioManamagement.API.Context;
using PortfolioManamagement.API.Models;
using PortfolioManamagement.API.Repositories.Interface;

namespace PortfolioManamagement.API.Repositories.Implementation
{
  public class UserRepository : IUserRepository
  {
    private readonly AppDBContext _context;

    public UserRepository(AppDBContext context)
    {
      _context = context;
    }
    public async Task<User> AddUserAsync(User user)
    {
      _context.Users.Add(user);
      await _context.SaveChangesAsync();
      return user;
    }

    public async Task<IEnumerable<User>> GetAllUsersAsync()
    {
      return await _context.Users.ToListAsync();
    }

    public async Task<User?> GetUserByIdAsync(int id)
    {
      return await _context.Users.FindAsync(id);
    }

    public async Task<User?> UpdateUserAsync(User user)
    {
      var existingUser = await _context.Users.FindAsync(user.Id);
      if (existingUser == null) return null;

      existingUser.FullName = user.FullName;
      existingUser.Email = user.Email;
      existingUser.Password = user.Password;

      await _context.SaveChangesAsync();
      return existingUser;
    }

    public async Task<bool> DeleteUserAsync(int id)
    {
      var user = await _context.Users.FindAsync(id);
      if (user == null) return false;

      _context.Users.Remove(user);
      await _context.SaveChangesAsync();
      return true;
    }
  }
}
