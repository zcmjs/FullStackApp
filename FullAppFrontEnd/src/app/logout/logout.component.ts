import {Component, OnInit} from '@angular/core';
import {HardcodedAuthenticationService} from '../services/hardcoded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  //@TODO dlaczego wylogowaywanie nie moze byc w konstruktorze
  constructor(private authenticate: HardcodedAuthenticationService) {

  }

  ngOnInit() {
    this.authenticate.loggout();
  }

}
