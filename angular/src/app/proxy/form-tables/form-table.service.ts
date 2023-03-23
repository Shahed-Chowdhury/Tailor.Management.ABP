import type { CreateUpdateFormTableDTO, FormTableDTO } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormTableService {
  apiName = 'Default';

  create = (input: CreateUpdateFormTableDTO) =>
    this.restService.request<any, FormTableDTO>({
      method: 'POST',
      url: '/api/app/form-table',
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/form-table/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, FormTableDTO>({
      method: 'GET',
      url: `/api/app/form-table/${id}`,
    },
    { apiName: this.apiName });

  getAllTables = () =>
    this.restService.request<any, FormTableDTO[]>({
      method: 'GET',
      url: '/api/app/form-table/tables',
    },
    { apiName: this.apiName });

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<FormTableDTO>>({
      method: 'GET',
      url: '/api/app/form-table',
      params: { skipCount: input.skipCount, maxResultCount: input.maxResultCount, sorting: input.sorting },
    },
    { apiName: this.apiName });

  getTableWithFieldsById = (id: string) =>
    this.restService.request<any, FormTableDTO>({
      method: 'GET',
      url: `/api/app/form-table/${id}/table-with-fields`,
    },
    { apiName: this.apiName });

  update = (id: string, input: CreateUpdateFormTableDTO) =>
    this.restService.request<any, FormTableDTO>({
      method: 'PUT',
      url: `/api/app/form-table/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
