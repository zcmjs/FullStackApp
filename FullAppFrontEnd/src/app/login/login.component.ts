import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BasicAuthenticationService} from "../services/basic-authentication.service";

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
              private authenticationService: BasicAuthenticationService) {
  }

  ngOnInit() {
  }

  send() {
    this.authenticationService.executeLoginUser(this.username, this.password).subscribe(result => {
        this.router.navigate(['dashboard', this.username]); //username to jest parameter  {path: 'dashboard/:name', component: DashboardComponent},
        this.invalidAuthorizationData = false;
      },
      error => {
        console.log('cos poszlo nie tak');
        this.invalidAuthorizationData = true;
      });
  }
}
