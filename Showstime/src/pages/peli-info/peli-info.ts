import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Peli }       from '../../models/pelicula.model'
import { PelisProvider } from '../../providers/pelis/pelis'
/**
 * Generated class for the PeliInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-peli-info',
  templateUrl: 'peli-info.html',

})
export class PeliInfoPage {

  private peli: Peli[]=[];
  private id: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public pelisProvider: PelisProvider) {
    this.peli = this.pelisProvider.getPelis();
    this.id = this.pelisProvider.getId();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeliInfoPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
