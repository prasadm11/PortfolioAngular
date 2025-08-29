using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PortfolioManamagement.API.DTO_s;
using PortfolioManamagement.API.Services;

namespace PortfolioManamagement.API.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class EmailController : ControllerBase
  {
    private readonly IEmailService _emailService;

    public EmailController(IEmailService emailService)
    {
      _emailService = emailService;
    }

    [HttpPost("send")]
    public async Task<IActionResult> SendEmail([FromBody] EmailRequest request)
    {
      await _emailService.SendEmailAsync(request);
      return Ok(new { message = "Email sent successfully" });
    }
  }
}
