import { Component, OnInit } from '@angular/core';
import {HardcodedAuthenticationService} from '../../services/hardcoded-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn = false;

  constructor(private authenticate: HardcodedAuthenticationService) { }

  ngOnInit() {
    this.isUserLoggedIn = this.authenticate.isUserLoggedIn();
  }

}
