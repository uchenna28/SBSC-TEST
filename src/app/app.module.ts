import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app.module-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardOverviewComponent } from './dashboard-overview/dashboard-overview.component';
import { ScheduleComponent } from './schedule/schedule.component';
// import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DashboardComponent, 
    SidebarComponent,
    NavbarComponent,
    DashboardOverviewComponent,
    ScheduleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    // NgbModule,
    // SweetAlert2Module.forRoot(),
  ],
  providers: [DashboardComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
