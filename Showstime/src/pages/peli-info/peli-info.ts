import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { PelisProvider } from '../../providers/pelis/pelis';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';
import { DomSanitizer } from '@angular/platform-browser';

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

  item: Observable<any>;
  private id: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController, public pelisProvider: PelisProvider,
    public db: AngularFireDatabase, private sanitizer: DomSanitizer) {
    this.id = this.pelisProvider.getId();
    this.item = db.list('pelis', ref => ref.orderByChild('id').equalTo(this.id)).valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeliInfoPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
