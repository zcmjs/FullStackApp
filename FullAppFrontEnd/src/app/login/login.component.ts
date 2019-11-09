import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

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

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  send() {

    if (this.username !== 'paweł.macoń' && this.password !== 'ssie') {
      this.invalidAuthorizationData = true;
    } else {
      this.router.navigate(['dashboard', this.username]); //username to jest parameter  {path: 'dashboard/:name', component: DashboardComponent},
    }

  }
}
