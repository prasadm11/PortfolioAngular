using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using PortfolioManamagement.API.Context;
using PortfolioManamagement.API.Models;

namespace PortfolioManamagement.API.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class AuthController : ControllerBase
  {
    private readonly AppDBContext _context;
    private readonly IConfiguration _configuration;

    public AuthController(AppDBContext context, IConfiguration configuration)
    {
      _context = context;
      _configuration = configuration;
    }

    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginModel login)
    {
      var user = _context.Users.FirstOrDefault(u =>
          u.Email == login.Email && u.Password == login.Password);

      if (user == null)
        return Unauthorized("Invalid email or password");

      var tokenHandler = new JwtSecurityTokenHandler();
      var key = Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]);
      var tokenDescriptor = new SecurityTokenDescriptor
      {
        Subject = new ClaimsIdentity(new[]
          {
                    new Claim(ClaimTypes.Name, user.UserName),
                    new Claim(ClaimTypes.Email, user.Email),
                    new Claim("UserId", user.Id.ToString())
                }),
        Expires = DateTime.UtcNow.AddMinutes(
              Convert.ToDouble(_configuration["Jwt:ExpireMinutes"])),
        Issuer = _configuration["Jwt:Issuer"],
        Audience = _configuration["Jwt:Audience"],
        SigningCredentials = new SigningCredentials(
              new SymmetricSecurityKey(key),
              SecurityAlgorithms.HmacSha256Signature)
      };

      var token = tokenHandler.CreateToken(tokenDescriptor);

      return Ok(new
      {
        token = tokenHandler.WriteToken(token),
        expiration = token.ValidTo
      });
    }
  }
}
