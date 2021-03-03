import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService} from './shared/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate{

  constructor(private authenticateService:AuthenticateService, private router:Router)
  {
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):| Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree  {
      
      if(this.authenticateService.isLoggedIn){
      return true;
      }else
      return this.router.navigate(['sign-in']);
      
  
    }
  }