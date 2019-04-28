import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book }       from '../../models/book.model';

@Injectable()
export class BooksProvider {

  private books: Book []=
  [{
    id: 0,
    nombre: 'Romeo y Julieta',
    puntuacion: "9.1",
    autor: "William Shakespeare",
    genero: "Tragicomedia",
    estreno: "26 de abril de 1894",
    sinopsis: "«El ser humano no verá nunca la realidad de forma más clara que lo hizo Shakespeare.» T.S. Eliot La historia de Romeo y Julieta tiene antecedentes en la mitología y literatura griegas y en algunas leyendas medievales. Durante los siglos XV y XVI fue objeto de múltiples versiones, pero fue Shakespeare quien le infundió una pasión y un dramatismo inéditos hasta entonces y que han contribuido a mantener la leyenda en la memoria colectiva. En Verona, dos jóvenes enamorados, de dos familias enemigas, son víctimas de una situación de odio y violencia que ni desean ni pueden remediar. En una de esas tardes de verano en que el calor «inflama la sangre», Romeo, recién casado en secreto con su amada Julieta, mata al primo de ésta. A partir de ahí Shakespeare desencadena la tragedia y precipita los acontecimientos, guiados por el azar y la fatalidad. Ángel-Luis Pujante destaca en esta edición la fuerza poética y retórica de Romero y Julieta: los juegos de palabras, la coexistencia de prosa y verso, de lo culto y lo coloquial, de lo lírico y lo dramático contribuyen a intensificar los contrastes de la acción.",
    poster: "http://static.serlogal.com/imagenes_big/9788466/978846623775.JPG",
    backsplash: "https://i.dailymail.co.uk/i/pix/2012/02/10/article-2099615-11ABA47F000005DC-864_1024x615_large.jpg",
    captura: "https://i.dailymail.co.uk/i/pix/2012/02/10/article-2099615-11ABA47F000005DC-864_1024x615_large.jpg",
    backcolor: "#C25A6D"},
  ];

  private current: number = 0;

  constructor(public http: HttpClient) {}

  getBooks(){
    return this.books;
  }

  getId(){
    return this.current;
  }

  setId(id: number){
    this.current = id;
  }
}
