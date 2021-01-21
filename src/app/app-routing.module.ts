import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {AddbookComponent}  from './addbook/addbook.component';
import {UpdeleteComponent} from  './updelete/updelete.component';
const routes: Routes = [
  {path : "",redirectTo:"addBookDetails",pathMatch:"full"},
  {path:"addBookDetails",component:AddbookComponent},
  {path:"updateordelete",component:UpdeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
