import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { DoctorPage } from '../doctor/doctor';
import {Http} from '@angular/http';


/**
 * Generated class for the EspecialidadesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-especialidades',
  templateUrl: 'especialidades.html',

})

export class EspecialidadesPage {
  
  data:any = {};
  usuarios : any[]
  public id;
  public nombre;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpProvider,public https:Http) {
    
    this.id = this.navParams.get('id');
    this.nombre = this.navParams.get('nombre');
    this.data.especialidades = '';
    this.https = https;

  } 

 
  ionViewDidLoad() {
    this.http.loadUsers().then( res => {
      this.usuarios = res.listaEspecialidad;
      console.log(this.usuarios)
     
    },
    error =>{
      console.log(error);
    });
  }
  especialidad(esp_doc){
   // console.log(elemento)
    
    this.navCtrl.push(DoctorPage, {
      'id': this.id,
      'nombre': this.nombre,
      'especialidad_doc':esp_doc,
     
      
      
    });
  }
    }
