import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../../shared/authenticate.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  constructor(public authenticateService:AuthenticateService) { }

  ngOnInit(): void {
  }
  

}
