import { Component, OnInit } from '@angular/core';
import { AuthenticateService} from '../../shared/authenticate.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public authenticateService:AuthenticateService) { }

  ngOnInit(): void {
  }

}
