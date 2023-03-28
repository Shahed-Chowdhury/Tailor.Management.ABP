using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tailor.Management.ABP.FormTables;
using Volo.Abp.Domain.Entities.Auditing;

namespace Tailor.Management.ABP.FormResponses
{
    public class FormResponse: AuditedAggregateRoot<Guid>
    {
        [Required]
        public string Response { get; set; }
        [Required, ForeignKey("FormTable")]
        public Guid FormId { get; set; }
        public FormTable FormTable { get; set; }
    }
}
