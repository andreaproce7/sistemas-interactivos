import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Peli }       from '../../models/pelicula.model';

@Injectable()
export class PelisProvider {

  private peliculas: Peli []=
  [{
    id: 0,
    nombre: 'Vengadores: Endgame',
    puntuacion: "9.3",
    trailerlink: "https://www.youtube.com/embed/UQ3bqYKnyhM",
    director: "Joe Russo y Anthony Russo",
    genero: "Acción y aventura",
    estreno: "26 de abril de 2019",
    duracion: "3 horas",
    sinopsis: "Después de los eventos devastadores de 'Avengers: Infinity War', el universo está en ruinas debido a las acciones de Thanos, el Titán Loco. Con la ayuda de los aliados que quedaron, los Vengadores deberán reunirse una vez más para intentar deshacer sus acciones y restaurar el orden en el universo de una vez por todas, sin importar cuáles son las consecuencias... Cuarta y última entrega de la saga 'Vengadores'.",
    movistar: "",
    hbo: "",
    netflix: "",
    primevideo: "",
    applestore: "",
    microsoftstore: "",
    googleplay: "",
    poster: "https://image.tmdb.org/t/p/w440_and_h660_face/qwLbQSeFy6ht8skBtao7lAZjsDo.jpg",
    backsplash: "https://image.tmdb.org/t/p/original/orjiB3oUIsyz60hoEqkiGpy5CeO.jpg",
    captura: "https://image.tmdb.org/t/p/original/orjiB3oUIsyz60hoEqkiGpy5CeO.jpg",
    backcolor: "#1c0c4a"},
    {
      id: 1,
      nombre: 'Vengadores: Infinity War',
      puntuacion: "8.2",
      trailerlink: "https://www.youtube.com/embed/-f5PwE_Q8Fs",
      director: "Joe Russo y Anthony Russo",
      genero: "Acción y aventura",
      estreno: "27 de abril de 2018",
      duracion: "2 horas y 40 minutos",
      sinopsis: "Después de los eventos devastadores de 'Avengers: Infinity War', el universo está en ruinas debido a las acciones de Thanos, el Titán Loco. Con la ayuda de los aliados que quedaron, los Vengadores deberán reunirse una vez más para intentar deshacer sus acciones y restaurar el orden en el universo de una vez por todas, sin importar cuáles son las consecuencias... Cuarta y última entrega de la saga 'Vengadores'.",
      movistar: "1",
      hbo: "1",
      netflix: "",
      primevideo: "",
      applestore: "",
      microsoftstore: "",
      googleplay: "",
      poster: "https://image.tmdb.org/t/p/original/q6Q81fP4qPvfQTH2Anlgy12jzO2.jpg",
      backsplash: "https://image.tmdb.org/t/p/original/xmgAsda5sPNpx5ghJibJ80S7Pfx.jpg",
      captura: "https://image.tmdb.org/t/p/original/fjzjVPGJoHDIiK6cFvebcmhxDA7.jpg",
      backcolor: "purple"}
  ];

  private current: number = 0;

  constructor(public http: HttpClient) {}

  getPelis(){
    return this.peliculas;
  }

  getId(){
    return this.current;
  }

  setId(id: number){
    this.current = id;
  }
}
