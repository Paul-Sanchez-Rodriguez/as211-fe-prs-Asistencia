import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdolescentComponent } from './pages/home-adolescent/home-adolescent.component';
const routes: Routes = [
  {
    path: '',
    component: HomeAdolescentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdolescentRoutingModule { }
