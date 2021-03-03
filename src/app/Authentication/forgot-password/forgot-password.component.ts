import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../../shared/authenticate.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(public authenticateService:AuthenticateService) { }

  ngOnInit(): void {
  }
  onClose(){
    
  }

}
