using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace Tailor.Management.ABP.FormResponses
{
    internal interface IFormResponseAppServices:
        ICrudAppService<FormResponseDTO, Guid, PagedAndSortedResultRequestDto, CreateUpdateFormResponseDTO>
    {
    }
}
