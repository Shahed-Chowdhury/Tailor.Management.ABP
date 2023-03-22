using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace Tailor.Management.ABP.FormFields
{
    public class FormFieldDTO: AuditedEntityDto<Guid>
    {
        public string LabelName { get; set; }

        public string Placeholder { get; set; }

        public bool IsRequired { get; set; } = false;

        public string FieldType { get; set; }

        public string DefaultValue { get; set; }

        public Guid FormId { get; set; }
    }
}
