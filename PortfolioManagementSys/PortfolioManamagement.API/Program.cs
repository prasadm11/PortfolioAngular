
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using PortfolioManamagement.API.Context;
using PortfolioManamagement.API.Repositories.Implementation;
using PortfolioManamagement.API.Repositories.Interface;
using PortfolioManamagement.API.Services;
namespace PortfolioManamagement.API
{
  public class Program
  {
    public static void Main(string[] args)
    {
      var builder = WebApplication.CreateBuilder(args);

      // Add services to the container.

      builder.Services.AddControllers();

      // Add Swagger services
      builder.Services.AddEndpointsApiExplorer();
      builder.Services.AddSwaggerGen(c =>
      {
        c.SwaggerDoc("v1", new OpenApiInfo
        {
          Title = "Portfolio Management API",
          Version = "v1"
        });

        // ✅ Add JWT Authentication to Swagger
        c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
        {
          Name = "Authorization",
          Type = SecuritySchemeType.ApiKey,
          Scheme = "Bearer",
          BearerFormat = "JWT",
          In = ParameterLocation.Header,
          Description = "Enter 'Bearer' [space] and then your valid JWT token.\r\n\r\nExample: \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6...\""
        });

        c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            new string[] {}
        }
    });
      });

      // ✅ Add CORS (allow all)
      builder.Services.AddCors(options =>
      {
        options.AddPolicy("AllowAll", policy =>
        {
          policy.AllowAnyOrigin()
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
      });

      builder.Services.AddDbContext<AppDBContext>(options =>
          options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

      // JWT Configuration
      var jwtSettings = builder.Configuration.GetSection("Jwt");
      builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
          .AddJwtBearer(options =>
          {
            options.TokenValidationParameters = new TokenValidationParameters
            {
              ValidateIssuer = true,
              ValidateAudience = true,
              ValidateLifetime = true,
              ValidateIssuerSigningKey = true,
              ValidIssuer = jwtSettings["Issuer"],
              ValidAudience = jwtSettings["Audience"],
              IssuerSigningKey = new SymmetricSecurityKey(
              Encoding.UTF8.GetBytes(jwtSettings["Key"]))
            };
          });

      // service registration for repositories and services
      builder.Services.AddScoped<UserService>();
      builder.Services.AddScoped<IUserRepository,UserRepository>();

      builder.Services.AddScoped<ContactService>();
      builder.Services.AddScoped<IContactRepository,ContactRepository>();


      var app = builder.Build();

      // Configure the HTTP request pipeline.
      if (app.Environment.IsDevelopment())
      {
        app.UseSwagger();
        app.UseSwaggerUI(c =>
        {
          c.SwaggerEndpoint("/swagger/v1/swagger.json", "Portfolio Management API v1");
          c.RoutePrefix = string.Empty; // Serve Swagger UI at root "/"
        });
      }

      app.UseHttpsRedirection();

      app.UseCors("AllowAll");

      app.UseAuthentication();

      app.UseAuthorization();

      app.MapControllers();

      app.Run();
    }
  }
}
