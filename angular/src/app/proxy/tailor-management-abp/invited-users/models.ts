import type { AuditedEntityDto } from '@abp/ng.core';

export interface CreateUpdateInvitedUserDTO {
  userName: string;
  email: string;
  role: string;
}

export interface InvitedUserDTO extends AuditedEntityDto<string> {
  userName?: string;
  email?: string;
  role?: string;
}
