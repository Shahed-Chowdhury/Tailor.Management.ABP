using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities.Auditing;

namespace Tailor.Management.ABP.InvitedUsers
{
    public class InvitedUser: AuditedAggregateRoot<Guid>
    {
        public string Username { get; set; }
        public string Email { get; set; }
        public string Role { get; set; }
    }
}
