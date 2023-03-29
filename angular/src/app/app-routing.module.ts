import { ViewFormComponent } from './view-form/view-form.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, PermissionGuard } from '@abp/ng.core';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canActivate: [],
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'account', 
    loadChildren: () => import('@abp/ng.account').then(m => m.AccountModule.forLazy()),
  },
  {
    path: 'identity',
    canActivate: [PermissionGuard],
    loadChildren: () => import('@abp/ng.identity').then(m => m.IdentityModule.forLazy()),
  },
  {
    path: 'tenant-management',
    loadChildren: () =>
      import('@abp/ng.tenant-management').then(m => m.TenantManagementModule.forLazy()),
  },
  {
    path: 'setting-management',
    loadChildren: () =>
      import('@abp/ng.setting-management').then(m => m.SettingManagementModule.forLazy()),
  },
  { path: 'create-custom-form', canActivate: [AuthGuard, PermissionGuard], loadChildren: () => import('./custom-form/custom-form.module').then(m => m.CustomFormModule)},
  { path: 'all-custom-forms', canActivate: [AuthGuard, PermissionGuard], loadChildren: () => import('./all-forms/all-forms.module').then(m => m.AllFormsModule)},
  { path: 'view-form/:id', canActivate: [], loadChildren: () => import('./view-form/view-form.module').then(m => m.ViewFormModule)}, //, data:{requiredPolicy: 'Customer || Admin'}
  { path: 'form-submitted', canActivate: [], loadChildren: () => import('./form-submitted/form-submitted.module').then(m => m.FormSubmittedModule) },
  { path: 'form-responses/:title/:id', canActivate: [AuthGuard, PermissionGuard], loadChildren: () => import('./form-responses/form-responses.module').then(m => m.FormResponsesModule), data:{requiredPolicy: 'Admin'} },
  { path: 'invite-user', loadChildren: () => import('./invite-user/invite-user.module').then(m => m.InviteUserModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
