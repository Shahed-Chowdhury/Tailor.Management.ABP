using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using Tailor.Management.ABP.FormFields;
using Volo.Abp.Application.Dtos;

namespace Tailor.Management.ABP.FormTables
{
    public class FormTableDTO: AuditedEntityDto<Guid>
    {
        public string Title { get; set; }
        public string Description { get; set; }

        public List<FormFieldDTO> FormFields { get; set; }
        //public ICollection<FormFieldDTO> FormFields { get; set; }

        //public FormTableDTO() 
        //{ 
        //    FormFields = new List<FormFieldDTO>();
        //}
    }

    public class FormTableDTO2 : AuditedEntityDto<Guid>
    {
        public Guid Id { get; set; }    
        public string Title { get; set; }
        public string Description { get; set; }

        public List<FormFieldDTO> FormFields { get; set; }

        //public ICollection<FormFieldDTO> FormFields { get; set; }

        //public FormTableDTO2()
        //{
        //    FormFields = new List<FormFieldDTO>();
        //}
    }
}
