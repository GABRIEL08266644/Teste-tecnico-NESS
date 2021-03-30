using Corinthians.Data;
using Corinthians.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Corinthians.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PlayersController : ControllerBase
    {
        private readonly DbPlayersshipContext _context;

        public PlayersController(DbPlayersshipContext context)
        {
            _context = context;
        }

        // GET
        [HttpGet]
        public async Task<ActionResult<List<PlayersModel>>> Get()
        {
            try
            {
                var playerList = await _context.Players.ToListAsync();
                return Ok (playerList); 
            }
            catch(Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        // GET
        [HttpGet("{id}")]
        public async Task<ActionResult<PlayersModel>> GetById(int id)
        {
            try
            {
                var players = await _context.Players
                    .Where(x => x.Id == id)
                    .FirstOrDefaultAsync();
                return Ok(players);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        // POST
        [HttpPost]
        public async Task<ActionResult<PlayersModel>> Post([FromBody] PlayersModel players)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { message = "Foi mal" });
            }
            try
            {
                _context.Players.Add(players);
                await _context.SaveChangesAsync();
                return Ok(players);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        // PUT
        [HttpPut("{id}")]
        public async Task<ActionResult<PlayersModel>> Put(int id, [FromBody] PlayersModel playersModel)
        {
            try
            {
                var players = await _context.Players
                    .Where(x => x.Id == id)
                    .FirstOrDefaultAsync();
                    
                players.Name = playersModel.Name;
                players.Age = playersModel.Age;
                players.Goals = playersModel.Goals;
                players.Hometown = playersModel.Hometown;

                _context.Entry(players).State = EntityState.Modified;
                await _context.SaveChangesAsync();

                return Ok(players);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        // DELETE
        [HttpDelete("{id}")]
        public async Task<ActionResult<PlayersModel>> Delete(int id)
        {
            try
            {
                var players = await _context.Players
                    .Where(x => x.Id == id)
                    .FirstOrDefaultAsync();

                if (players == null)
                {
                    return BadRequest(new { message = "Carro não encontrado" });
                }

                _context.Remove(players);
                await _context.SaveChangesAsync();
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }
    }
}