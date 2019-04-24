import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { PeliInfoPage } from '../peli-info/peli-info'
/**
 * Generated class for the PendientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.html',
})
export class PendientesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    /*Para que el selector muestre inicialmente las películas*/
    this.contenido="pelis";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendientesPage');
  }

  presentModal() {
     const modal = this.modalCtrl.create(PeliInfoPage);
     modal.present();
   }

}
