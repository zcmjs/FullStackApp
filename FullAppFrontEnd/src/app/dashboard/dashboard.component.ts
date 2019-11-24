import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DashboardService} from './services/dashboard.service';
import {DashBoardDto} from './dtos/DashboardDto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  loginx: string;
  dashboard: DashBoardDto;

  constructor(private route: ActivatedRoute,
              private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.loginx = this.route.snapshot.params['name'];
  }

  getCustomizedData() {
    this.dashboardService.getCustomizedDataWithParameter('SEX !!!!').subscribe(
      response => this.dashboard = response,
      error => this.specialErrorHandler(error)
    );
  }

  private specialErrorHandler(error) {
    alert('Coś sie zjebało :' + error.error.message);
  }

}
