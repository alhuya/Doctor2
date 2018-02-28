import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
import { EspecialidadesPage } from '../especialidades/especialidades';
import { HistorialPage } from '../historial/historial';
import { RecetasPage } from '../recetas/recetas';
 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public id;
  public nombre;
  usuarios : any[]

  constructor(public navCtrl: NavController,public navParams: NavParams) {
    this.id = this.navParams.get('id'); 
    this.nombre = this.navParams.get('nombre');

  }
  AgendarCita(){
    this.navCtrl.push(EspecialidadesPage, {
      'id': this.id,
      'nombre': this.nombre,
      
    });
  }
  HistorialConsultas(){
    
    this.navCtrl.push(HistorialPage, {
      'id': this.id,
      'nombre': this.nombre,
      
      
    });
  }
  RecetasMedicas(){
    this.navCtrl.push(RecetasPage, {
      'id': this.id,
      'nombre': this.nombre,
      
    });
  }

}
 