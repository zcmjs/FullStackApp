import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  loginx: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.loginx = this.route.snapshot.params['name'];
  }

}
