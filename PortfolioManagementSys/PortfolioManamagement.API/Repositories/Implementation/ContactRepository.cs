using MongoDB.Driver;
using PortfolioManamagement.API.Context;
using PortfolioManamagement.API.Models;
using PortfolioManamagement.API.Repositories.Interface;

namespace PortfolioManamagement.API.Repositories.Implementation
{
  public class ContactRepository : IContactRepository
  {
    private readonly MongoDbContext _context;

    public ContactRepository(MongoDbContext context)
    {
      _context = context;
    }

    public async Task<IEnumerable<Contact>> GetAllAsync()
    {
      return await _context.Contacts.Find(_ => true).ToListAsync();
    }

    public async Task<Contact?> GetByIdAsync(string id)
    {
      return await _context.Contacts
                           .Find(u => u.Id == id)
                           .FirstOrDefaultAsync();
    }

    public async Task<Contact> AddAsync(Contact contact)
    {
      await _context.Contacts.InsertOneAsync(contact);
      return contact; // return inserted doc
    }

    public async Task<Contact> UpdateAsync(Contact contact)
    {
      var result = await _context.Contacts
                                 .ReplaceOneAsync(u => u.Id == contact.Id, contact);

      if (result.MatchedCount == 0)
        throw new KeyNotFoundException("Contact not found.");

      return contact;
    }

    public async Task<bool> DeleteAsync(string id)
    {
      var result = await _context.Contacts
                                 .DeleteOneAsync(u => u.Id == id);

      return result.DeletedCount > 0;
    }
  }
}
