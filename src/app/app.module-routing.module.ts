import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, children: [] },
  { path: 'schedule', component: ScheduleComponent, children: [] },
  { path: '', component: AuthComponent },

  // { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
