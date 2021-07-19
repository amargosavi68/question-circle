import { Component, OnInit, Output } from '@angular/core';
import { User } from "../interfaces/User";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {

  user: User = {
    id: 1,
    name: "Amar Gosavi",
    email: "abc@email.com",
    password: "",
    remember: false,
    admin: false,
    image: "",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
