using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace TailorManagementABP.InvitedUsers
{
    public interface IinvitedUserAppService: ICrudAppService<InvitedUserDTO, Guid, PagedAndSortedResultRequestDto, CreateUpdateInvitedUserDTO>
    {
    }
}
