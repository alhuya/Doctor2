import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http'; 
import { HttpProvider } from '../../providers/http/http';
import { HomePage} from '../home/home';

/**
 * Generated class for the CitasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-citas',
  templateUrl: 'citas.html',
})
export class CitasPage {
  data:any = {};
  citas : any[]
  doctor:any[]
 
  public nombre_admin;
  public especialidad;
  public nombre_us;
  public turno;
  public hora;
  public id_user;
  constructor(public navCtrl: NavController, public navParams: NavParams,public https:Http,public http: HttpProvider) {
    this.nombre_admin = this.navParams.get('nombre_administrador');
    this.especialidad = this.navParams.get('especialidad');
    this.nombre_us = this.navParams.get('nombre_usuario');
    this.turno = this.navParams.get('turno');
    this.hora = this.navParams.get('Hora_cita');
    this.id_user = this.navParams.get('id');
    


 
    this.data.Fecha = '';
 
   
    this.https = https;
  }

  AgendarCita(){    
 
         
          var link = 'http://doctores.000webhostapp.com/API/Agendar_cita.php';
          var myData = JSON.stringify({Fecha:this.data.Fecha, Hora:this.hora, Doctor:this.nombre_admin, Especialidad:this.especialidad ,Usuario:this.nombre_us, id:this.id_user});
          this.https.post(link, myData)
          .subscribe(data => {
          this.data.response = data["_body"];
          console.log(this.nombre_us);
         
          
          
          }, error => {
          console.log("Oooops!");
          })        

        }
        regresar() {        

          this.navCtrl.push(HomePage, {
            'id': this.id_user,
            'nombre': this.nombre_us ,
            
          });
        }             
     
   
    }


