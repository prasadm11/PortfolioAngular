using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PortfolioManamagement.API.Models;
using PortfolioManamagement.API.Services;

namespace PortfolioManamagement.API.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  [Authorize]
  public class UserController : ControllerBase
  {
    private readonly UserService _userService;

    public UserController(UserService userService)
    {
      _userService = userService;
    }

    // GET: api/User
    [HttpGet]
    public async Task<IActionResult> GetAllUsers()
    {
      var users = await _userService.GetAllUsersAsync();
      return Ok(users);
    }

    // GET: api/User/5
    [HttpGet("{id}")]
    public async Task<IActionResult> GetUserById(string id)
    {
      var user = await _userService.GetUserByIdAsync(id);
      if (user == null) return NotFound();
      return Ok(user);
    }

    // POST: api/User
    [HttpPost]
    public async Task<IActionResult> CreateUser([FromBody] User user)
    {
      if (!ModelState.IsValid) return BadRequest(ModelState);

      var newUser = await _userService.AddUserAsync(user);
      return CreatedAtAction(nameof(GetUserById), new { id = newUser.Id }, newUser);
    }

    // PUT: api/User/5
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateUser(string id, [FromBody] User user)
    {
      if (id != user.Id) return BadRequest("ID mismatch");

      var updatedUser = await _userService.UpdateUserAsync(user);
      if (updatedUser == null) return NotFound();

      return Ok(updatedUser);
    }

    // DELETE: api/User/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteUser(string id)
    {
      var result = await _userService.DeleteUserAsync(id);
      if (!result) return NotFound();

      return NoContent();
    }
  }
}
