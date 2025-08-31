using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PortfolioManamagement.API.Models;
using PortfolioManamagement.API.Services;

namespace PortfolioManamagement.API.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ContactController : ControllerBase
  {
    private readonly ContactService _contactService;

    public ContactController(ContactService contactService)
    {
      _contactService = contactService;
    }

    // GET: api/contact
    [HttpGet]
    [Authorize]
    public async Task<IActionResult> GetAll()
    {
      var contacts = await _contactService.GetAllAsync();
      return Ok(contacts);
    }

    // GET: api/contact/{id}
    [HttpGet("{id}")]
    [Authorize]
    public async Task<IActionResult> GetById(string id)
    {
      var contact = await _contactService.GetByIdAsync(id);
      if (contact == null) return NotFound();
      return Ok(contact);
    }

    // POST: api/contact
    [HttpPost]
    public async Task<IActionResult> Create([FromBody] Contact contact)
    {
      if (contact == null) return BadRequest("Invalid contact data.");

      var created = await _contactService.AddAsync(contact);
      return CreatedAtAction(nameof(GetById), new { id = created.Id }, created);
    }

    // PUT: api/contact/{id}
    [HttpPut("{id}")]
    [Authorize]
    public async Task<IActionResult> Update(string id, [FromBody] Contact contact)
    {
      if (id != contact.Id) return BadRequest("ID mismatch.");

      var updated = await _contactService.UpdateAsync(contact);
      if (updated == null) return NotFound();

      return Ok(updated);
    }

    // DELETE: api/contact/{id}
    [HttpDelete("{id}")]
    [Authorize]
    public async Task<IActionResult> Delete(string id)
    {
      var deleted = await _contactService.DeleteAsync(id);
      if (!deleted) return NotFound();

      return NoContent();
    }
  }
}
