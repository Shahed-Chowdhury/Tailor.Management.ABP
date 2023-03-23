using Microsoft.EntityFrameworkCore;
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
        private readonly IRepository<FormField, Guid> _formFieldRepository;
        public FormTableAppService(IRepository<FormTable, Guid> repository,
            IRepository<FormField, Guid> formFieldRepo) : base(repository)
        {
            _formFieldRepository = formFieldRepo;
        }

        public async Task<List<FormTableDTO>> GetAllTables()
        {
            var tables = await Repository.ToListAsync();
            return ObjectMapper.Map<List<FormTable>, List<FormTableDTO>>(tables);
        }

        public async Task<FormTableDTO> GetTableWithFields(Guid id)
        {
            var fieldQuery = _formFieldRepository.AsQueryable();
            var tableQuery = Repository.AsQueryable();

            var returnResult = new FormTableDTO();

            FormTable tbl = await tableQuery.FirstOrDefaultAsync(x => x.Id == id);

            if (tbl == null)
            {
                return null;
            }

            returnResult = ObjectMapper.Map<FormTable, FormTableDTO>(tbl);
            var fields = await fieldQuery.Where(x => x.FormId == id).ToListAsync();
            returnResult.FormFields = ObjectMapper.Map<List<FormField>, List<FormFieldDTO>>(fields);
            return returnResult;
        }
    }
}
