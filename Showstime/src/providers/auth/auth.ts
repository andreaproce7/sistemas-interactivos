import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

   constructor(private public afAuth: AngularFireAuth, public http: HttpClient) {
    afAuth.auth.onAuthStateChanged((user)=>{
      if(user){
        this.nav.navigateForward(['/home']);
      } else {
        this.nav.navigateForward(['']);
      }
    })
  }

  async login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then((success) => {
      console.log(success);
    }).catch((error) => {
      console.log(error);
    });
  }

  async signup(email: string, password: string){
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then((success) => {
      console.log(success);
    }).catch((error) => {
      console.log(error);
    });

  }

  async logout(){
    this.afAuth.auth.signOut().then(() => {
      console.log("logged out");
    }).catch((error) => {
      console.log(error);
    });
  }
}
