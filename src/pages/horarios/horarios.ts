import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http'; 
import {CitasPage} from '../citas/citas';

/**
 * Generated class for the HorariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-horarios',
  templateUrl: 'horarios.html',
})
export class HorariosPage {
  data:any = {};
  Doctores : any[]
  public nombre_admin;
  public especialidad;
  public nombre_us;
  public turno;
  public id;
  constructor(public navCtrl: NavController, public navParams: NavParams,public https:Http) {
    this.nombre_admin = this.navParams.get('nombre_administrador');
    this.especialidad = this.navParams.get('especialidad');
    this.nombre_us = this.navParams.get('nombre_usuario');
    this.turno = this.navParams.get('turno');
    this.id = this.navParams.get('id');
    this.https = https;
  }

  
  ionViewDidLoad() {
    var link = 'https://doctores.000webhostapp.com/API/listar_horario.php';
    var myData = JSON.stringify({Turno: this.turno});
    this.https.post(link, myData)
    .subscribe(data => {
    this.data.response = data["_body"];
  console.log(this.data.response);
    this.Doctores = JSON.parse(data["_body"])
    console.log(this.Doctores.length);

    }, error => {
    console.log("Oooops!");
    })
    
    
  }

  Horario(hora){
  
     
     this.navCtrl.push(CitasPage, {
       'id':this.id,
      'nombre_administrador': this.nombre_admin,
      'especialidad': this.especialidad,
      'turno': this.turno,
      'nombre_usuario':this.nombre_us ,
      'Hora_cita':hora,

      
       
       
     });
   }
}
