import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { FormGroup, FormControl } from '@angular/forms';
import { ModalController } from 'ionic-angular';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loginForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modalController: ModalController, public authProvider: AuthProvider)
              {
                this.loginForm = new FormGroup({
                  email: new FormControl(),
                  password: new FormControl()
                });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public login() {
    this.authProvider.login(this.loginForm.value["email"], this.loginForm.value["password"]);
  }

  public toSignup () {
    this.navCtrl.push('SignupPage');
  }

}
