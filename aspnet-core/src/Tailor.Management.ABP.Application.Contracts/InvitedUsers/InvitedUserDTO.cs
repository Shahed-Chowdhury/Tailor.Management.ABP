using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace TailorManagementABP.InvitedUsers
{
    public class InvitedUserDTO : AuditedEntityDto<Guid>
    {
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }
    }
}
