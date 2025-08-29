using PortfolioManamagement.API.Models;

namespace PortfolioManamagement.API.Repositories.Interface
{
  public interface IContactRepository
  {
    Task<IEnumerable<Contact>> GetAllAsync();
    Task<Contact?> GetByIdAsync(int id);
    Task<Contact> AddAsync(Contact contact);
    Task<Contact> UpdateAsync(Contact contact);
    Task<bool> DeleteAsync(int id);
  }
}
