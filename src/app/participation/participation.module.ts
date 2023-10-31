import { ParticipationListComponent } from './components/participation-list/participation-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParticipationRoutingModule } from './participation-routing.module';
import { HomeParticipationComponent } from './pages/Home-participation/home-participation.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    ParticipationListComponent,
    HomeParticipationComponent
  ],
  imports: [
    CommonModule,
    ParticipationRoutingModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
  ]
})
export class ParticipationModule { }
