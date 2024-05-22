import { Component } from '@angular/core';
import {LoginComponent} from "../login/login.component";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private logincomponent: LoginComponent) {
  }

  OpenLoginDialog() {
    this.logincomponent.LoginDialog()
  }

}
