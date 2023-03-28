using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tailor.Management.ABP.FormFields;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace Tailor.Management.ABP.FormResponses
{
    public class FormResponseAppService :
        CrudAppService<FormResponse, FormResponseDTO, Guid, PagedAndSortedResultRequestDto, CreateUpdateFormResponseDTO>
    {
        public FormResponseAppService(IRepository<FormResponse, Guid> repository) : base(repository)
        {
        }

        public async Task<FormResponseDTO> SaveResponse(CreateUpdateFormResponseDTO response)
        {
            var ret = await Repository.InsertAsync(MapToEntity(response));
            if(ret == null)
            {
                throw new UserFriendlyException("Unable to save");
            }
            
            return ObjectMapper.Map<FormResponse, FormResponseDTO>(ret);

        }
    }
}
