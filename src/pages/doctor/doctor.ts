import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import {Http} from '@angular/http'; 
import {HorariosPage} from '../horarios/horarios';

/**
 * Generated class for the DoctorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctor',
  templateUrl: 'doctor.html',
})
export class DoctorPage {
  data:any = {};
 Doctores : any[]
 /*
 Nombre1: string;
 Nombre2:string;
 Especialidad1: string;
 Especialidad2:string;
 TM: string;
 TV:string;
 */
 public nombre_user;
 public especilidad;
 public id;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpProvider,public https:Http) {
    this.nombre_user = this.navParams.get('nombre');
   this.especilidad = this.navParams.get('especialidad_doc');
   this.id = this.navParams.get('id');
    //console.log(this.nombre_user);
    //console.log(this.especilidad);
    this.https = https;
  }

  cargarDoctores(){
    this.http.loadDoctores().then( res => {
          this.Doctores = res.listaDoctores;
          console.log(this.Doctores)
        },
        error =>{
          console.log(error);
        });
  }

  ionViewDidLoad() {
    var link = 'https://doctores.000webhostapp.com/API/listar_doctores.php';
    var myData = JSON.stringify({Especialidad: this.especilidad});
    this.https.post(link, myData)
    .subscribe(data => {
    this.data.response = data["_body"];
   //console.log(this.data.response);
    this.Doctores = JSON.parse(data["_body"])
    //console.log(this.Doctores.length);
    /*
   this.Nombre1= this.Doctores[0]['Nombre']
    this.Nombre2= this.Doctores[1]['Nombre']
    this.Especialidad1= this.Doctores[0]['Especialidad']
    this.Especialidad2= this.Doctores[1]['Especialidad']
    this.TM= this.Doctores[0]['Turno']
    this.TV= this.Doctores[1]['Turno']

*/
    }, error => {
    console.log("Oooops!");
    })
    
    
  }
  cita(elemento1,elemento2,elemento3){
  // this.navCtrl.push(CitasPage);
  this.navCtrl.push(HorariosPage, {
    'id': this.id,
    'nombre_administrador': elemento1,
    'especialidad': elemento2,
    'turno': elemento3,
    'nombre_usuario':this.nombre_user ,
   
    
    
  });
   
  }

}
