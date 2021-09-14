import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {path:'profile/:name', component: ProfileComponent},
  {path:'list', component: ListComponent},
  {path:'', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
