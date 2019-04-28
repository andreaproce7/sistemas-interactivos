import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  public registerForm: FormGroup;

  constructor(public authProvider: AuthProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.registerForm = new FormGroup({
        email: new FormControl(),
        password: new FormControl(),
        fullname: new FormControl(),
      });
    }

  public register() {
    this.authProvider.signup(this.registerForm.value["email"], this.registerForm.value["password"]).then((value) => {
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
