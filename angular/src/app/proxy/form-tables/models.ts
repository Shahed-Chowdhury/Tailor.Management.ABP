import type { AuditedEntityDto } from '@abp/ng.core';
import type { FormFieldDTO } from '../form-fields/models';

export interface CreateUpdateFormTableDTO {
  title?: string;
  description?: string;
}

export interface FormTableDTO extends AuditedEntityDto<string> {
  title?: string;
  description?: string;
  formFields: FormFieldDTO[];
}
