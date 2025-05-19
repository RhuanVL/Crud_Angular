namespace CrudAspAngular.Models
{ 
  public class Produtos
  {
    public int id { get; set; }
    public string? nome { get; set; } = string.Empty;
    public decimal? preco { get; set; }
    public int? quantidade { get; set; }
  }
}
