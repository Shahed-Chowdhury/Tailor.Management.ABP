using AutoMapper;
using Tailor.Management.ABP.FormFields;
using Tailor.Management.ABP.FormResponses;
using Tailor.Management.ABP.FormTables;
using Tailor.Management.ABP.InvitedUsers;
using TailorManagementABP.InvitedUsers;

namespace Tailor.Management.ABP
{
    public class ABPApplicationAutoMapperProfile : Profile
    {
        public ABPApplicationAutoMapperProfile()
        {
            /* You can configure your AutoMapper mapping configuration here.
             * Alternatively, you can split your mapping configurations
             * into multiple profile classes for a better organization. */
            CreateMap<FormField, FormFieldDTO>();
            CreateMap<CreateUpdateFormFieldDTO, FormField>();
            CreateMap<FormTable,  FormTableDTO>();
            CreateMap<CreateUpdateFormTableDTO, FormTable>();
            CreateMap<FormResponse, FormResponseDTO>();
            CreateMap<CreateUpdateFormResponseDTO, FormResponse>();
            CreateMap<CreateUpdateInvitedUserDTO, InvitedUser>();
            CreateMap<InvitedUser, InvitedUserDTO>();
        }
    }
}
