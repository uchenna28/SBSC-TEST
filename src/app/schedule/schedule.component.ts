import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  apidata: any;  
  apiUrl: any;
  appointments: any;

  constructor(
    private httpClient: HttpClient,  
  ) {}

  ngOnInit() {
    this.getDashboardData();
      
  }

  getDashboardData() {
    this.apiUrl =
      'https://612b668c22bb490017893b1d.mockapi.io/health/v1/patients';

    this.httpClient.get<any>(this.apiUrl).subscribe((data) => {
      console.log('schedules ' + data); 
      this.appointments = data
    });
  }

}
