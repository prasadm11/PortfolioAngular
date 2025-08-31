using PortfolioManamagement.API.Models;
using PortfolioManamagement.API.Repositories.Interface;

namespace PortfolioManamagement.API.Services
{
  public class ContactService
  {
    private readonly IContactRepository _contactRepository;

    public ContactService(IContactRepository contactRepository)
    {
      _contactRepository = contactRepository;
    }

    public async Task<IEnumerable<Contact>> GetAllAsync()
    {
      return await _contactRepository.GetAllAsync();
    }

    public async Task<Contact?> GetByIdAsync(string id)
    {
      return await _contactRepository.GetByIdAsync(id);
    }

    public async Task<Contact> AddAsync(Contact contact)
    {
      return await _contactRepository.AddAsync(contact);
    }

    public async Task<Contact> UpdateAsync(Contact contact)
    {
      return await _contactRepository.UpdateAsync(contact);
    }

    public async Task<bool> DeleteAsync(string id)
    {
      return await _contactRepository.DeleteAsync(id);
    }
  }
}
