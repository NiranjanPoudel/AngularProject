import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../../shared/authenticate.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  

  constructor(public authenticateService: AuthenticateService,) { }

  ngOnInit(): void {
   
  }
 

}
 