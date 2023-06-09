﻿using System.ComponentModel.DataAnnotations;

namespace TailorManagementABP.InvitedUsers
{
    public class CreateUpdateInvitedUserDTO
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Role { get; set; }
    }
}
