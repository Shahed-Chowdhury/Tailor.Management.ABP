import type { AuditedEntityDto } from '@abp/ng.core';

export interface CreateUpdateFormFieldDTO {
  labelName: string;
  placeholder: string;
  isRequired: boolean;
  fieldType: string;
  defaultValue?: string;
  formId: string;
  slNo: number;
}

export interface FormFieldDTO extends AuditedEntityDto<string> {
  labelName?: string;
  placeholder?: string;
  isRequired: boolean;
  fieldType?: string;
  defaultValue?: string;
  formId?: string;
  slNo: number;
}
