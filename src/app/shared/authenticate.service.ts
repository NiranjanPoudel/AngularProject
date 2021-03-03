import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { NotificationService } from './notification.service';
import { user } from './user';








@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
 userState:any;
  constructor( public afa:AngularFireAuth,
          public afs:AngularFirestore,
          public router:Router,
          public ngZone:NgZone,
           public notification:NotificationService,

    ) {

      this.afa.authState.subscribe(user=>{
        if(user){
          this.userState=user;
          
          localStorage.setItem('user',JSON.stringify(this.userState));
          JSON.parse(localStorage.getItem('user'));
        }
        else{
          localStorage.setItem('user',null);
          JSON.parse(localStorage.getItem('user'));
        }
      })
  }
   
  SignIn(email,password){
    return this.afa.signInWithEmailAndPassword(email,password)
    .then(
      (result)=>{
        // this.ngZone.run(()=>{
          
          this.router.navigate(['/dashboard']);
         
        // });
        this.SetUserData(result.user);
        // this.notification.warn('Successfully Signed In!!');

      }).catch((error)=>{
        window.alert(error.message);
        
      });
      
  } 


  SignUp(email, password) {
    return this.afa.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.SendVerificationMail();
        this.SetUserData(result.user);
        // this.snackBar.open('Successfully SignedUp!!');
      }).catch((error) => {
        window.alert(error.message)
      })
  }

      SendVerificationMail(){
        return this.afa.currentUser.then(u=>u.sendEmailVerification())
        .then(()=>this.router.navigate(['email-verification'])
        )}

        ForgotPassword(passwordResetEmail) {
          return this.afa.sendPasswordResetEmail(passwordResetEmail)
          .then(() => {
            window.alert('Password reset email sent, check your inbox.');
          }).catch((error) => {
            window.alert(error)
          })
        }

        get isLoggedIn(): boolean {
          const user = JSON.parse(localStorage.getItem('user'));
         // return (user && user.emailVerified) ? true : false;
         return user!==null;
        }
        // GoogleAuth() {
        //   return this.AuthLogin(new auth.GoogleAuthProvider());
        // }
      
        AuthLogin(provider) {
          return this.afa.signInWithPopup(provider)
          .then((result) => {
             this.ngZone.run(() => {
                this.router.navigate(['dashboard']);
              })
            this.SetUserData(result.user);
          }).catch((error) => {
            window.alert(error)
          })
        }
      
        SetUserData(user) {
          const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
          const userState: user = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified
          }
          return userRef.set(userState, {
            merge: true
          })
        }
       
        SignOut() {
          return this.afa.signOut().then(() => {
            localStorage.removeItem('user');
            this.router.navigate(['sign-in']);
          })
        }  
}
