import type { AuditedEntityDto } from '@abp/ng.core';

export interface CreateUpdateFormResponseDTO {
  response: string;
  formId: string;
}

export interface FormResponseDTO extends AuditedEntityDto<string> {
  response: string;
  formId: string;
}
