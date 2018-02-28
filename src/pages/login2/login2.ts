import { Component } from '@angular/core';
import { IonicPage, NavController,NavParams} from 'ionic-angular';
import {Http} from '@angular/http';
import { MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegistrosPage} from '../registros/registros';

/**
 * Generated class for the Login2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login2',
  templateUrl: 'login2.html',
  
})
export class Login2Page {
  data:any = {};
  Datos = [];
  

  
  usuarios : any[];
  mesagge: string;
  
  constructor(public navCtrl: NavController, public https:Http,public navParams: NavParams,public menuCtrl: MenuController) {

    this.data.Correo = '';
    this.data.Clave = '';
    this.https = https;
    this.navParams.get('Correo');
    this.navParams.get('Clave');
    
  }
  registro(){
    this.navCtrl.push(RegistrosPage);
  } 
  ionViewWillEnter() {
    
           this.menuCtrl.swipeEnable( false )
       }
    
       ionViewDidLeave() {
    
           this.menuCtrl.swipeEnable( true )
       }
  
  
  Login(){

    var link = 'https://doctores.000webhostapp.com/API/login.php';
    var myData = JSON.stringify({Correo: this.data.Correo, Clave: this.data.Clave});
    this.https.post(link, myData)  
    
    .subscribe(data => {
    
      


      /*
      if(this.data.Correo){
        
        this.navCtrl.setRoot('EspecialidadesPage', {
          'Correo': this.data.Correo
          
        });
      }
      else{
        console.log("User already exists");
      }
      */
     // this.data=JSON.parse["_body"];  
     // console.log(this.data);
     // //this.navCtrl.setRoot('EspecialidadesPage')
     // this.navCtrl.push('EspecialidadesPage');
   
this.data.response = data["_body"];  

this.Datos = JSON.parse(data["_body"]);
//console.log(this.Datos);
//console.log(this.Datos.length); 
//console.log(this.data);
//console.log(Datos);
//console.log(this.Datos[0]['id']);
if (this.Datos.length == 0){
  this.mesagge = 'Datos de usuario incorrectos';
}
if (this.Datos.length == 1){
 // var id = Datos[0]['id']
 // var nombre = Datos[0]['Nombre']
 this.navCtrl.push(HomePage, {
  'id': this.Datos[0]['id'],
  'nombre': this.Datos[0]['Nombre'],
  
});
 
 
 /* 
var frutas = ['Manzana', 'Banana'];

//console.log(frutas.length); 
var primero = this.Datos[0];
console.log(primero);
this.Datos.forEach(function (elemento, indice, array) {
  console.log(elemento, indice);

});

*/


}


  


   
   
    }, error => {
    console.log("Oooops!");
    })
    
}

  }



