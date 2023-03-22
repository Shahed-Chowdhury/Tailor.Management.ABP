using AutoMapper;
using Tailor.Management.ABP.FormFields;
using Tailor.Management.ABP.FormTables;

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
        }
    }
}
