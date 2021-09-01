import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  ModalDismissReasons,
  NgbModal,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';
import { Chart } from '../../assets/js/plugins/chartjs.min.js';

declare var Guage: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  apiUrl: string;
  apidata: any; 
  modalOptions: NgbModalOptions;
  closeResult: string;  
  patientStat: any;
  totalAppointments: any;
  totalPatients: any;
  totalWaitingroom: any;
  appointments: any;

  constructor(
    private httpClient: HttpClient, 
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getDashboardData();
      
  }

  getDashboardData() {
    this.apiUrl =
      'https://612b668c22bb490017893b1d.mockapi.io/health/v1/welcome';

    this.httpClient.get<any>(this.apiUrl).subscribe((data) => {
      console.log('dashboard ' + data);
      this.totalPatients = data.total_patients
      this.totalAppointments = data.total_appointments
      this.totalWaitingroom = data.total_waiting_room
      this.appointments = data.appointments
      this.patientStat = data.patient_stats[0]
      this.getChart(this.patientStat.male, this.patientStat.female, this.patientStat.trans, this.patientStat.others)
    });
  }
 

  public getChart(
    male: any,
    female: any,
    trans: any,
    others: any, 
  ) {
     
      this.cd.detectChanges();
      var myChart = new Chart(document.getElementById('patientDonut'), {
        type: 'doughnut',
        data: {
          // labels: ['Red', 'Blue'],
          datasets: [
            {
              label: ['Male', 'Female', 'Trans', 'Others'],
              data: [male, female, trans, others],
              backgroundColor: ['#20CB85', '#5A5EED', '#00CFDE', '#FF8080'],
              borderColor: ['#20CB85', '#5A5EED', '#00CFDE', '#FF8080'],
              borderWidth: 17,
              // borderRadius: 10,
            },
          ],
        },
        options: {
          circumference: 117 * Math.PI,
          rotation: 172 * Math.PI,
          cutout: 115,
          radius: 85,
          elements: {
            arc: 34,
          },
          plugins: {},
        },
      });
    
  }
 
}
