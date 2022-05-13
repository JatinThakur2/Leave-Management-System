import { AuthService } from './../../../feature/dashboard/auth/auth.service';
import { Component, OnInit } from '@angular/core';

import { SidebarService } from '../service/sidebar.service';
import { EmployeeService } from './../../../feature/dashboard/services/employee.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent implements OnInit {

  isLoggedIn: boolean = this._auth.isLoggedIn();
  ohide = true;
  nhide = true;
  rnhide = true;

  has_error = false;
  password_update_msg;
  selected_user_msg;
  user;
  employeesUnderSupervision;

  constructor(private _sideBarService: SidebarService, public _auth: AuthService, private _employeeService: EmployeeService) { }
  ngOnInit() {
    this.getUserInfo();
  }
  getUserInfo() {
    this._employeeService.getCurrentEmployee()
      .subscribe(
        data => {
          this.user = data;
        },
        error => {
          this.selected_user_msg = 'Oops ! Can\'t load Profile';
        });
  }

  toggleSidebar() {
    this._sideBarService.toggle();
  }

}
