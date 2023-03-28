using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Tailor.Management.ABP.FormResponses
{
    public class CreateUpdateFormResponseDTO
    {
        [Required]
        public string Response { get; set; }
        [Required]
        public Guid FormId { get; set; }
    }
}
