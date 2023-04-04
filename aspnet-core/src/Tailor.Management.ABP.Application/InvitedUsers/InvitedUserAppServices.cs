using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tailor.Management.ABP.Emailing;
using Tailor.Management.ABP.Emailing.Templates.InviteUser;
using TailorManagementABP.InvitedUsers;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Emailing;
using Volo.Abp.Identity;
using Volo.Abp.Users;

namespace Tailor.Management.ABP.InvitedUsers
{
    public class InvitedUserAppServices : CrudAppService<InvitedUser, InvitedUserDTO, Guid, PagedAndSortedResultRequestDto, CreateUpdateInvitedUserDTO>
    {
        private readonly IEmailSender _emailSender;
        private readonly EmailService _emailService;
        private readonly IRepository<IdentityUser, Guid> _userRepository; 
        
        public InvitedUserAppServices(IRepository<InvitedUser, Guid> repository, IEmailSender emailSender, EmailService emailService, IRepository<IdentityUser, Guid> userRepository) : base(repository)
        {
            _emailSender = emailSender;
            _emailService = emailService;
            _userRepository = userRepository;
        }

        public async Task<InvitedUserDTO> AddInvitedUser(CreateUpdateInvitedUserDTO dto)
        {
            try
            {
                var checkInvitedUser = await Repository.Where(x => x.Email == dto.Email).FirstOrDefaultAsync();
                var checkIdentityUsers = await _userRepository.Where(x => x.Email == dto.Email).FirstOrDefaultAsync();

                if (checkInvitedUser != null || checkIdentityUsers != null)
                {
                    throw new Exception("Email already exist");
                }

                var dbObj = await Repository.InsertAsync(MapToEntity(dto));

                var invitedUser = new Emailing.Templates.InviteUser.InvitedUser
                {
                    Email = dbObj.Email,
                    UserName = dbObj.Username,
                    UserId = dbObj.Id
                };


                await _emailService.InvitedUserEmailAsync(invitedUser);

                return ObjectMapper.Map<InvitedUser, InvitedUserDTO>(dbObj);
            }
            catch (Exception ex)
            {
                throw new UserFriendlyException(ex.Message);
            }
        }

        public async Task<List<InvitedUserDTO>> GetInvitedUserList()
        {
            try
            {
                var userList = await Repository.AsNoTracking().ToListAsync();
                return ObjectMapper.Map<List<InvitedUser>, List<InvitedUserDTO>>(userList);
            }
            catch(Exception ex)
            {
                throw new UserFriendlyException(ex.Message);
            }
        }
    }
}
