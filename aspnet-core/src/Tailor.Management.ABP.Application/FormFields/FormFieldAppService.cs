using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tailor.Management.ABP.EntityFrameworkCore;
using Tailor.Management.ABP.FormTables;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace Tailor.Management.ABP.FormFields
{
    public class FormFieldAppService : CrudAppService<FormField, FormFieldDTO, Guid, PagedAndSortedResultRequestDto, CreateUpdateFormFieldDTO>
    {
        private readonly ABPDbContext _context;
        public FormFieldAppService(IRepository<FormField, Guid> repository, ABPDbContext context) : base(repository)
        {
            _context = context;
        }

        public async Task<CreateUpdateFormFieldDTO> SaveFieldValue(CreateUpdateFormFieldDTO field)
        {
            
            var checkDuplicate = Repository.Where(x =>
                x.LabelName == field.LabelName &&
                x.IsRequired == field.IsRequired &&
                x.Placeholder == field.Placeholder &&
                x.FieldType == field.FieldType &&
                x.DefaultValue == field.DefaultValue &&
                x.FormId == field.FormId
            ).ToList();

            if (checkDuplicate.Count > 0)
            {
                return null;
            }

            var ret = await Repository.InsertAsync(MapToEntity(field));

            return ret != null ?
                new CreateUpdateFormFieldDTO() :
                throw new UserFriendlyException("Unable to save field");
        }
    }
}
