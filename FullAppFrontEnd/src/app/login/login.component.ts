import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HardcodedAuthenticationService} from './../services/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  errorMessage = 'Invalid Credentials';
  invalidAuthorizationData = false;

  constructor(private router: Router,
              private authenticationService: HardcodedAuthenticationService) {
  }

  ngOnInit() {
  }

  send() {

    if (this.authenticationService.authenticate(this.username, this.password)) {
      this.router.navigate(['dashboard', this.username]); //username to jest parameter  {path: 'dashboard/:name', component: DashboardComponent},
    } else {
      this.invalidAuthorizationData = true;
    }
  }
}
