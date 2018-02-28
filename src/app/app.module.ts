import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Login2Page } from '../pages/login2/login2';
import { RegistrosPage } from '../pages/registros/registros';
import { CitasPage } from '../pages/citas/citas';
import { DoctorPage } from '../pages/doctor/doctor';
import { HorariosPage } from '../pages/horarios/horarios';
import { AcercaDePage } from '../pages/acerca-de/acerca-de';
import { HistorialPage } from '../pages/historial/historial';
import { RecetasPage} from '../pages/recetas/recetas';
import {EspecialidadesPage} from '../pages/especialidades/especialidades';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { HttpProvider } from '../providers/http/http';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login2Page,
    RegistrosPage,
    CitasPage,    
    DoctorPage,
    HorariosPage,
    AcercaDePage,
    HistorialPage,
    RecetasPage,
    EspecialidadesPage,
    


   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login2Page,
    RegistrosPage,
    CitasPage,    
    DoctorPage,
    HorariosPage,
    AcercaDePage,
    HistorialPage,
    RecetasPage,
    EspecialidadesPage,

    
   
 

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider,
   
    
    
  ]
})
export class AppModule {}
