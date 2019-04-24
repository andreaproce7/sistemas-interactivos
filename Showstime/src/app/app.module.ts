import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { PerfilPage } from '../pages/perfil/perfil';
import { PendientesPage } from '../pages/pendientes/pendientes';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PeliInfoPage } from '../pages/peli-info/peli-info';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PelisProvider } from '../providers/pelis/pelis';

@NgModule({
  declarations: [
    MyApp,
    PeliInfoPage,
    PerfilPage,
    PendientesPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PeliInfoPage,
    PerfilPage,
    PendientesPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PelisProvider
  ]
})
export class AppModule {}
