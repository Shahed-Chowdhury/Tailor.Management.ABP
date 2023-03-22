using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace Tailor.Management.ABP.FormTables
{
    internal interface IFormTableAppServices:
        ICrudAppService<FormTableDTO, Guid, PagedAndSortedResultRequestDto, CreateUpdateFormTableDTO>
    {
    }
}
