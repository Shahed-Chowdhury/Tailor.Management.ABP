using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Tailor.Management.ABP.FormFields
{
    public class CreateUpdateFormFieldDTO
    {
        [Required, MaxLength(100)]
        public string LabelName { get; set; }

        [Required, MaxLength(100)]
        public string Placeholder { get; set; }

        public bool IsRequired { get; set; } = false;

        [Required, MaxLength(100)]
        public string FieldType { get; set; }

        [MaxLength(100)]
        public string DefaultValue { get; set; }

        [Required]
        public Guid FormId { get; set; }
    }
}
