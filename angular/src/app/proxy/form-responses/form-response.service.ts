import type { CreateUpdateFormResponseDTO, FormResponseDTO } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormResponseService {
  apiName = 'Default';

  create = (input: CreateUpdateFormResponseDTO) =>
    this.restService.request<any, FormResponseDTO>({
      method: 'POST',
      url: '/api/app/form-response',
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/form-response/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, FormResponseDTO>({
      method: 'GET',
      url: `/api/app/form-response/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<FormResponseDTO>>({
      method: 'GET',
      url: '/api/app/form-response',
      params: { skipCount: input.skipCount, maxResultCount: input.maxResultCount, sorting: input.sorting },
    },
    { apiName: this.apiName });

  saveResponseByResponse = (response: CreateUpdateFormResponseDTO) =>
    this.restService.request<any, FormResponseDTO>({
      method: 'POST',
      url: '/api/app/form-response/save-response',
      body: response,
    },
    { apiName: this.apiName });

  update = (id: string, input: CreateUpdateFormResponseDTO) =>
    this.restService.request<any, FormResponseDTO>({
      method: 'PUT',
      url: `/api/app/form-response/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
