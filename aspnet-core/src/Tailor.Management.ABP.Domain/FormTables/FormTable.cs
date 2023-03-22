using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tailor.Management.ABP.FormFields;
using Volo.Abp.Domain.Entities.Auditing;

namespace Tailor.Management.ABP.FormTables
{
    public class FormTable: AuditedAggregateRoot<Guid>
    {
        [MaxLength(100)]
        public string Title { get; set; }
        [MaxLength(100)]
        public string Description { get; set; }

        public ICollection<FormField> FormFields { get; set; }

        public FormTable() 
        {
            FormFields = new List<FormField>();
        }
    }
}
