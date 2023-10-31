import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeParticipationComponent } from './pages/Home-participation/home-participation.component';

const routes: Routes = [
  {
    path: '',
    component: HomeParticipationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParticipationRoutingModule { }
