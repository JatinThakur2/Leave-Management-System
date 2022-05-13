import { CoreModule } from './../../core/core.module';
import { ReportService } from './services/report.service';
import { EventService } from './services/event.service';

import { AdminAuthGuard } from './auth/adminAuth.guard';
import { MaterialModule } from './../../shared/material/material.module';
import { HttpInterceptorService } from './auth/http-interceptor.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { EmployeeLeaveService } from './services/employeeLeave.service';
import { LeaveTypeService } from './services/leaveType.service';
import { EmployeeService } from './services/employee.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee-contents/employee-list/employee-list.component';
import { EmployeeMainComponent } from './employee-contents/employee-main/employee-main.component';
import { DashboardRoutingModule } from './dashboard-routing/dashboard-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DashHomeComponent } from './dash-home/dash-home.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { EmployeeManageComponent } from './employee-contents/employee-manage/employee-manage.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { LeavetypeListComponent } from './leavetype-contents/leavetype-list/leavetype-list.component';
import { LeavetypeMainComponent } from './leavetype-contents/leavetype-main/leavetype-main.component';
import { LeavetypeManageComponent } from './leavetype-contents/leavetype-manage/leavetype-manage.component';
import { LeaverequestListComponent } from './leaverequest-contents/leaverequest-list/leaverequest-list.component';
import { LeaverequestMainComponent } from './leaverequest-contents/leaverequest-main/leaverequest-main.component';
import { LeaverequestManageComponent } from './leaverequest-contents/leaverequest-manage/leaverequest-manage.component';
import { MyProfileComponent } from './profile-contents/my-profile/my-profile.component';
import { EmployeeDetailsComponent } from './employee-contents/employee-details/employee-details.component';
import { LeaverequestDetailsComponent } from './leaverequest-contents/leaverequest-details/leaverequest-details.component';
import { LeavetypeDetailsComponent } from './leavetype-contents/leavetype-details/leavetype-details.component';

import {NgxPaginationModule} from 'ngx-pagination';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';


import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CoreModule,
    FormsModule,
    NgSelectModule,
    HttpClientModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    MaterialModule,
    NgxPaginationModule,
    NgxChartsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  declarations: [
    MainLayoutComponent,
    DashHomeComponent,
    EmployeeMainComponent,
    EmployeeListComponent,
    EmployeeManageComponent,
    LeavetypeListComponent,
    LeavetypeMainComponent,
    LeavetypeManageComponent,
    LeaverequestListComponent,
    LeaverequestMainComponent,
    LeaverequestManageComponent,
    MyProfileComponent,
    EmployeeDetailsComponent,
    LeaverequestDetailsComponent,
    LeavetypeDetailsComponent,



  ],
  providers: [EmployeeService, LeaveTypeService, EmployeeLeaveService, ReportService, EventService,
    DatePipe, AuthGuard, AdminAuthGuard, AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
})
export class DashboardModule { }
