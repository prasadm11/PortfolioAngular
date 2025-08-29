using Microsoft.EntityFrameworkCore;
using PortfolioManamagement.API.Context;
using PortfolioManamagement.API.Models;
using PortfolioManamagement.API.Repositories.Interface;

namespace PortfolioManamagement.API.Repositories.Implementation
{
  public class ContactRepository : IContactRepository
  {
    private readonly AppDBContext _context;

    public ContactRepository(AppDBContext context)
    {
      _context = context;
    }

    public async Task<IEnumerable<Contact>> GetAllAsync()
    {
      return await _context.Contacts.ToListAsync();
    }

    public async Task<Contact?> GetByIdAsync(int id)
    {
      return await _context.Contacts.FindAsync(id);
    }

    public async Task<Contact> AddAsync(Contact contact)
    {
      _context.Contacts.Add(contact);
      await _context.SaveChangesAsync();
      return contact;
    }

    public async Task<Contact> UpdateAsync(Contact contact)
    {
      _context.Contacts.Update(contact);
      await _context.SaveChangesAsync();
      return contact;
    }

    public async Task<bool> DeleteAsync(int id)
    {
      var contact = await _context.Contacts.FindAsync(id);
      if (contact == null) return false;

      _context.Contacts.Remove(contact);
      await _context.SaveChangesAsync();
      return true;
    }
  }
}
