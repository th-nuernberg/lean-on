import {Component, DoBootstrap, OnInit} from '@angular/core';
import {LoginService} from "../login.service";

@Component({
  selector: 'app-check-token',
  templateUrl: './check-token.component.html',
  styleUrls: ['./check-token.component.css'],
  providers: [LoginService]
})
export class CheckTokenComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.login()
    console.log("hi")
  }



}
