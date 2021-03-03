import { Component, OnInit } from '@angular/core';
import { AuthenticateService} from '../../shared/authenticate.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public authenticateService:AuthenticateService) { }

  ngOnInit(): void {
  }
 
}
