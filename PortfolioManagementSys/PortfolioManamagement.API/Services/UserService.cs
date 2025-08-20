using PortfolioManamagement.API.Models;
using PortfolioManamagement.API.Repositories.Interface;

namespace PortfolioManamagement.API.Services
{
  public class UserService
  {
    private readonly IUserRepository _userRepository;

    public UserService(IUserRepository userRepository)
    {
      _userRepository = userRepository;
    }

    public Task<User> AddUserAsync(User user) => _userRepository.AddUserAsync(user);

    public Task<IEnumerable<User>> GetAllUsersAsync() => _userRepository.GetAllUsersAsync();

    public Task<User?> GetUserByIdAsync(int id) => _userRepository.GetUserByIdAsync(id);

    public Task<User?> UpdateUserAsync(User user) => _userRepository.UpdateUserAsync(user);

    public Task<bool> DeleteUserAsync(int id) => _userRepository.DeleteUserAsync(id);
  }
}
