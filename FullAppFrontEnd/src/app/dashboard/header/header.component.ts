import { Component, OnInit } from '@angular/core';
import {BasicAuthenticationService} from '../../services/basic-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn = false;

  constructor(private authenticate: BasicAuthenticationService) { }

  ngOnInit() {
    this.isUserLoggedIn = this.authenticate.isUserLoggedIn();
  }

}
