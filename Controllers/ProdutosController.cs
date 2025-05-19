using CrudAspAngular.Models;
using CrudAspAngular;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Data.Common;
using System.Data;

namespace CrudAspAngular.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ProdutosController : ControllerBase
  {
    private readonly ApplicationDbContext _context;

    private bool ProdutostExist(int id) { return _context.Produtos.Any(e => e.id == id); }

    public ProdutosController(ApplicationDbContext context)
    {
      _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Produtos>>> GetProdutos()
    {
      try
      {
        var produtos = await _context.Produtos.ToListAsync();

        if (produtos == null || !produtos.Any())
        {
          return NoContent(); 
        }

        return Ok(produtos);
        }
        catch (DbException)
        {
          throw;
        }
    }

    [HttpPost]
    public async Task<ActionResult<Produtos>> PostProduto(Produtos produto)
    {
      _context.Produtos.Add(produto);
      try { 
        await _context.SaveChangesAsync();
      return CreatedAtAction("GetProdutos", new
      {
        id = produto.id
      }, produto);
      }
      catch (DbUpdateConcurrencyException)
      {
        throw;
      }
    }

    [HttpPut]
    public async Task<IActionResult> PutProdutos(int id, Produtos produtos)
    {
      if (id != produtos.id)
      {
        return BadRequest();
      }
      _context.Entry(produtos).State = EntityState.Modified;
      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!ProdutostExist(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }
      return NoContent();
    }

    [HttpDelete]
    public async Task<IActionResult> DeleteProdutos(int id)
    {
      var produto = await _context.Produtos.FindAsync(id);
      if (produto == null)
      {
        return NotFound();
      }
      _context.Produtos.Remove(produto);
      await _context.SaveChangesAsync();
      return NoContent();
    }

  }
}
