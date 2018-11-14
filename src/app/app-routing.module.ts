import { NgModule  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditUserComponent } from './edit-user/edit-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
const routes: Routes = [
  { path: '', redirectTo: 'UserListComponent', pathMatch: 'full' },
  { path: 'UserListComponent', component: UserListComponent },
  { path: 'UserAdd', component: UserAddComponent },
  {path: 'editUser/:id',component: EditUserComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }