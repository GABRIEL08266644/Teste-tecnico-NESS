using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Corinthians.Models
{
    [Table("TblPlayers")]
    public class PlayersModel
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "Nome é obrigatorio")]
        [MaxLength(60, ErrorMessage = "Maximo de 60 caracteres")]
        [MinLength(3, ErrorMessage = "Minino de 3 caracteres")]
        public string Name { get; set; }

        [Range(1, Int64.MaxValue, ErrorMessage = ("O número deve ser maior que 0 e não deve conter caracteres"))]
        [Required(ErrorMessage = "Idade é obrigatorio")]
        public int Age { get; set; }

        [Required(ErrorMessage = "Este campo é obrigatorio")]
        public int Goals { get; set; }

        [Required(ErrorMessage = "Este campo é obrigatorio")]
        public string Hometown { get; set; }
    }
}