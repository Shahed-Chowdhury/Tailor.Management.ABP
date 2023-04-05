using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tailor.Management.ABP.EntityFrameworkCore;
using Tailor.Management.ABP.FormFieldModels;
using Tailor.Management.ABP.FormResponses;
using Tailor.Management.ABP.FormTables;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace Tailor.Management.ABP.FormFields
{
    public class FormFieldAppService : CrudAppService<FormFieldModel, FormFieldDTO, Guid, PagedAndSortedResultRequestDto, CreateUpdateFormFieldDTO>
    {

        private readonly IRepository<FormResponse> _formFieldsRepository;

        public FormFieldAppService(IRepository<FormFieldModel, Guid> repository,
            IRepository<FormResponse> formFieldsRepository) : base(repository)
        {
            _formFieldsRepository = formFieldsRepository;
        }

        public async Task<CreateUpdateFormFieldDTO> SaveFieldValue(CreateUpdateFormFieldDTO field)
        {
            
            var checkDuplicate = Repository.Where(x =>
                x.LabelName == field.LabelName &&
                x.IsRequired == field.IsRequired &&
                x.Placeholder == field.Placeholder &&
                x.FieldType == field.FieldType &&
                x.DefaultValue == field.DefaultValue &&
                x.FormId == field.FormId &&
                x.SlNo == field.SlNo
            ).ToList();

            if (checkDuplicate.Count > 0)
            {
                return null;
            }

            var ret = await Repository.InsertAsync(MapToEntity(field));

            return ret != null ?
                new CreateUpdateFormFieldDTO() :
                throw new UserFriendlyException("Unable to save field");
        }

        public async Task<List<FormFieldDTO>> GetAllFormFields(Guid formId)
        {
            var obj = await Repository.Where(x => x.FormId == formId).OrderBy(x => x.SlNo).Select(x => new FormFieldModel
            {
                LabelName = x.LabelName
            }).AsNoTracking().ToListAsync();
            return ObjectMapper.Map<List<FormFieldModel>, List<FormFieldDTO>>(obj);
        }

        public async Task<List<FormResponseDTO>> GetAllResponsesById(Guid formId)
        {
            var obj = await _formFieldsRepository.Where(x => x.FormId == formId).AsNoTracking().Select(x => new FormResponse
            {
               Response = x.Response,
            }).ToListAsync();
            return ObjectMapper.Map<List<FormResponse>,  List<FormResponseDTO>>(obj);
        }
    }
}
