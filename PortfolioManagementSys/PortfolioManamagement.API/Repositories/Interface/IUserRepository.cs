using PortfolioManamagement.API.Models;

namespace PortfolioManamagement.API.Repositories.Interface
{
  public interface IUserRepository
  {
    Task<User> AddUserAsync(User user);
    Task<IEnumerable<User>> GetAllUsersAsync();
    Task<User?> GetUserByIdAsync(int id);
    Task<User?> UpdateUserAsync(User user);
    Task<bool> DeleteUserAsync(int id);
  }
}
