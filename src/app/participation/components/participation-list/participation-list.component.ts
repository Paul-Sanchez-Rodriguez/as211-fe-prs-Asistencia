import { Component } from '@angular/core';
import { ParticipationService } from '../../services/participation.service';
import { AsistenciaDto } from '@soa/participation/model/dto/AsistenciaDto';

@Component({
  selector: 'app-participation-list',
  templateUrl: './participation-list.component.html',
  styleUrls: ['./participation-list.component.scss']
})
export class ParticipationListComponent {

  adolescentColumns: string[] = ['name', 'select'];
  dataSource: any[] = [];
  asistenciaList: any[] = [];
  activitiesList: any[] = [];
  idactividad: any;

  dataTutor: any;

  constructor(private participationService: ParticipationService) { }
  
  ngOnInit(): void {
    this.listActivities();
  }



  findbyIdActivity(idActivity: any) {
    this.participationService.findbyIdActivity(idActivity).subscribe((res) => {
      this.dataSource = res;
      console.log(this.dataSource);
    })
  }

  selectedRows: any[] = [];

  selectRow(row: any, event: any) {
    if (event.checked) {
      const asistencia = new AsistenciaDto();
      this.selectedRows.push(row);
      if (event.source.value === 'A') {
        asistencia.idactiviti = row.activities.id;
        asistencia.idadolescente = row.teeneger.id_teen;
        asistencia.asistencia = "A"
        this.asistenciaList.push(asistencia)
        console.log("asistio")
      } else if (event.source.value === 'F') {
        asistencia.idactiviti = row.activities.id;
        asistencia.idadolescente = row.teeneger.id_teen;
        asistencia.asistencia = "F"
        this.asistenciaList.push(asistencia)
        console.log("falto")
      } else {
        asistencia.idactiviti = row.activities.id;
        asistencia.idadolescente = row.teeneger.id_teen;
        asistencia.asistencia = "T"
        this.asistenciaList.push(asistencia)
        console.log("tardanza")
      }
    }
  }

  prueba() {
    for (const attendance of this.asistenciaList) {
      this.participationService.create(attendance).subscribe(res => {
        console.log("registrado " + res)
      })
    }

    this.findbyIdActivity(this.idactividad);
  }

  listActivities() {
    this.participationService.listActivities().subscribe((res: any) => {
      this.activitiesList = res;
    })
  }
}
