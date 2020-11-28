import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { AuthService } from '../security/auth.service';
import { LogoutService } from '../security/logout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  user: User;

  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  constructor(
    private auth: AuthService,
    private logoutService: LogoutService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = this.auth.getUserAuthenticated();
  }

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  logout() {
    this.logoutService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
  }

}
