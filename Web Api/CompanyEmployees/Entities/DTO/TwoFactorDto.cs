using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Entities.DTO
{
    public class TwoFactorDto
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string Provider { get; set; }
        [Required]
        public string Token { get; set; }
    }
}
