using MailKit.Net.Smtp;
using MimeKit;
using PortfolioManamagement.API.DTO_s;

namespace PortfolioManamagement.API.Services
{
  public interface IEmailService
  {
    Task SendEmailAsync(EmailRequest request);
  }

  public class EmailService : IEmailService
  {
    private readonly IConfiguration _config;

    public EmailService(IConfiguration config)
    {
      _config = config;
    }

    public async Task SendEmailAsync(EmailRequest request)
    {
      var email = new MimeMessage();
      email.From.Add(new MailboxAddress("Admin", _config["EmailSettings:From"]));
      email.To.Add(MailboxAddress.Parse(request.To));
      email.Subject = request.Subject;

      email.Body = new TextPart(MimeKit.Text.TextFormat.Html)
      {
        Text = request.Body
      };

      using var smtp = new SmtpClient();
      await smtp.ConnectAsync(_config["EmailSettings:SmtpServer"], int.Parse(_config["EmailSettings:Port"]), true);
      await smtp.AuthenticateAsync(_config["EmailSettings:Username"], _config["EmailSettings:Password"]);
      await smtp.SendAsync(email);
      await smtp.DisconnectAsync(true);
    }
  }
}
