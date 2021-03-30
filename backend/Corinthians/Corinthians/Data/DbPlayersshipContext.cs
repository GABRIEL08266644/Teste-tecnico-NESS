using Corinthians.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Corinthians.Data
{
    public class DbPlayersshipContext : DbContext
    {
        public DbPlayersshipContext(DbContextOptions<DbPlayersshipContext> options) : base(options)
        {  }
        public DbSet<PlayersModel> Players { get; set; }
    }
}