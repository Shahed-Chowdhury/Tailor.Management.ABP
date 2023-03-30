using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tailor.Management.ABP.Emailing.Templates.InviteUser
{
    public class InvitedUser
    {
        public string UserName { get; set; }
        public string Email { get; set; }
        public Guid UserId { get; set; }
        public string URL { get; set; }
    }
}
