import {Component, OnInit} from '@angular/core';
import {BasicAuthenticationService} from "../services/basic-authentication.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  //@TODO dlaczego wylogowaywanie nie moze byc w konstruktorze
  constructor(private authenticate: BasicAuthenticationService) {

  }

  ngOnInit() {
    this.authenticate.loggout();
  }

}
