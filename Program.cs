using CrudAspAngular;
using CrudAspAngular.Controllers;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Configurando apenas o contexto do banco de dados
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseMySQL(builder.Configuration.GetConnectionString("DefaultConnection")));

// Registrando o Controller diretamente
builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
  options.AddPolicy("AllowOrigin", policy =>
      policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader().DisallowCredentials());
});


// Configuração do Swagger para documentação da API
builder.Services.AddSwaggerGen(options =>
{
  options.SwaggerDoc("v1", new OpenApiInfo
  {
    Title = "WEB API",
    Version = "v1"
  });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
  app.UseDeveloperExceptionPage();
}

app.UseCors("AllowOrigin");
app.UseHttpsRedirection();
app.UseRouting();
app.UseAuthorization();
app.MapControllers();

app.UseSwagger();
app.UseSwaggerUI(c =>
{
  c.SwaggerEndpoint("/swagger/v1/swagger.json", "WEB API");
  c.DocumentTitle = "WEB API";
  c.DocExpansion(Swashbuckle.AspNetCore.SwaggerUI.DocExpansion.List);
});

app.Run();

