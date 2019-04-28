import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Book }       from '../../models/book.model'
import { BooksProvider } from '../../providers/books/books'
/**
 * Generated class for the PeliInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-books-info',
  templateUrl: 'books-info.html',

})
export class BooksInfoPage {

  private books: Book[]=[];
  private id: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public booksProvider: BooksProvider) {
    this.books = this.booksProvider.getBooks();
    this.id = this.booksProvider.getId();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BooksInfoPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
