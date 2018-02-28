import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';


/**
 * Generated class for the HistorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historial',
  templateUrl: 'historial.html',
})
export class HistorialPage {
  data:any = {};
  usuarios : any[]
  public id;
  public nombre;
  Doctores : any[]
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public https:Http) {
    this.id = this.navParams.get('id');
    this.nombre = this.navParams.get('nombre');
    this.https = https;
  }

  ionViewDidLoad() {
    var link = 'https://doctores.000webhostapp.com/API/listar_citas_id.php';
    var myData = JSON.stringify({Usuario: this.nombre });
    this.https.post(link, myData)  
    
    .subscribe(data => {  


this.data.response = data["_body"];  
console.log(this.data.response);
this.Doctores = JSON.parse(data["_body"]);  

    
   
    }, error => {
    console.log("Oooops!");
    })
    
  }

 
 }
