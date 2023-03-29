import type { CreateUpdateFormFieldDTO, FormFieldDTO } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { FormResponseDTO } from '../form-responses/models';

@Injectable({
  providedIn: 'root',
})
export class FormFieldService {
  apiName = 'Default';

  create = (input: CreateUpdateFormFieldDTO) =>
    this.restService.request<any, FormFieldDTO>({
      method: 'POST',
      url: '/api/app/form-field',
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/form-field/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, FormFieldDTO>({
      method: 'GET',
      url: `/api/app/form-field/${id}`,
    },
    { apiName: this.apiName });

  getAllFormFieldsByFormId = (formId: string) =>
    this.restService.request<any, FormFieldDTO[]>({
      method: 'GET',
      url: `/api/app/form-field/form-fields/${formId}`,
    },
    { apiName: this.apiName });

  getAllResponsesByIdByFormId = (formId: string) =>
    this.restService.request<any, FormResponseDTO[]>({
      method: 'GET',
      url: `/api/app/form-field/responses-by-id/${formId}`,
    },
    { apiName: this.apiName });

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<FormFieldDTO>>({
      method: 'GET',
      url: '/api/app/form-field',
      params: { skipCount: input.skipCount, maxResultCount: input.maxResultCount, sorting: input.sorting },
    },
    { apiName: this.apiName });

  saveFieldValueByField = (field: CreateUpdateFormFieldDTO) =>
    this.restService.request<any, CreateUpdateFormFieldDTO>({
      method: 'POST',
      url: '/api/app/form-field/save-field-value',
      body: field,
    },
    { apiName: this.apiName });

  update = (id: string, input: CreateUpdateFormFieldDTO) =>
    this.restService.request<any, FormFieldDTO>({
      method: 'PUT',
      url: `/api/app/form-field/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
