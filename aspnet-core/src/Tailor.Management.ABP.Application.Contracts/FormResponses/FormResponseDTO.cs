using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace Tailor.Management.ABP.FormResponses
{
    public class FormResponseDTO: AuditedEntityDto<Guid>
    {
        [Required]
        public string Response { get; set; }
        [Required]
        public Guid FormId { get; set; }
    }
}
