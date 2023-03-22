using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace Tailor.Management.ABP.FormFields
{
    internal interface IFormFieldAppServices:
        ICrudAppService<FormFieldDTO, Guid, PagedAndSortedResultRequestDto, CreateUpdateFormFieldDTO>
    {
    }
}
