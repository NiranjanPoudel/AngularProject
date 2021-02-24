import { Injectable } from '@angular/core';
import { MatSnackBar,MatSnackBarConfig} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackbar:MatSnackBar) { }

  config: MatSnackBarConfig={
    duration:3000,
    horizontalPosition:'right',
    verticalPosition:'top',
    panelClass:['notification','success'] ,
     


  }


  success(msg){
    
    this.snackbar.open(msg, '', this.config);
   

  }
  warn(msg){
    this.snackbar.open(msg,'',this.config);
  }
}
