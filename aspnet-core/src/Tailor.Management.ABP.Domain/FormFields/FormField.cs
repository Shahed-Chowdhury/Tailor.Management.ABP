using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tailor.Management.ABP.FormTables;
using Volo.Abp.Domain.Entities.Auditing;

namespace Tailor.Management.ABP.FormFields
{
    public class FormField: AuditedAggregateRoot<Guid>
    {
        //LabelName, Placeholder, IsRequired, FieldType, DefaultValue?, FormId
        [Required, MaxLength(100)]
        public string LabelName { get; set; }
        [Required, MaxLength(100)]
        public string Placeholder { get; set; }
        public bool IsRequired { get; set; } = false;
        [Required, MaxLength(100)]
        public string FieldType { get; set; }
        [MaxLength(100)]
        public string DefaultValue { get; set; }

        [Required, ForeignKey("FormTable")]
        public Guid FormId { get; set; }
        public FormTable FormTable { get; set; }

    }
}
