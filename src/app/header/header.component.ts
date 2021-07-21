import { Component, Input, OnInit } from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import { User } from '../interfaces/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() 'sidenav': MatSidenav;

  user: User = {
    id: 0,
    name: "",
    email: "",
    password: "",
    remember: false,
    contact: "",
    admin: false,
    image: "",
    designation: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
