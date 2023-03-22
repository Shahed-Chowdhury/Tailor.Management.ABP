using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Tailor.Management.ABP.EntityFrameworkCore;
using Tailor.Management.ABP.FormFields;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.ObjectMapping;

namespace Tailor.Management.ABP.FormTables
{
    public class FormTableAppService : CrudAppService<FormTable, FormTableDTO, Guid, PagedAndSortedResultRequestDto, CreateUpdateFormTableDTO>
    {
        private readonly ABPDbContext _context;
        public FormTableAppService(IRepository<FormTable, Guid> repository, ABPDbContext context) : base(repository)
        {
            _context = context;
        }

        public FormTableDTO GetTableWithFields(Guid id)
        {
            
                var tables = (
                from table in _context.FormTables
                where table.Id == id
                join fields in _context.FormFields on table.Id equals fields.FormId
                select new FormTable
                {
                    Title = table.Title,
                    Description = table.Description,
                    CreationTime = table.CreationTime,
                    LastModificationTime = table.LastModificationTime,
                    CreatorId = table.CreatorId,
                    FormFields = table.FormFields
                }).FirstOrDefault();

                if(tables == null) { return new FormTableDTO(); }

                var dto = ObjectMapper.Map<FormTable, FormTableDTO>(tables);
                dto.Id = id;
                return dto;
        }
    }
}
