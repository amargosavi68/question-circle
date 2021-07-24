import { Component, Input, OnInit } from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() 'sidenav': MatSidenav;
  
  isAuthenticated: Boolean = true;

  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit(): void {
    this.authService.isAuthenticated()
    .subscribe((value) => {
      this.isAuthenticated = value;
    });
  }

  logout() {

  }

}
