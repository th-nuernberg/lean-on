import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-token',
  templateUrl: './no-token.component.html',
  styleUrls: ['./no-token.component.css']
})
export class NoTokenComponent implements OnInit {

  constructor() { }

  content: string = "You are either missing a token or the token is not correct please try again or contact your teacher"

  ngOnInit(): void {
  }

}
