import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Login2Page } from '../login2/login2';

import {Http} from '@angular/http'; 
/**
 * Generated class for the RegistrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registros',
  templateUrl: 'registros.html',
}) 
export class RegistrosPage {
  data:any = {};
  mesagge: string;
  constructor(public navCtrl: NavController,  public https:Http) {
    this.data.Nombre = '';
    this.data.Ap_paterno= '';
    this.data.Ap_materno= '';    
    this.data.Edad= '';
    this.data.Genero= '';
    this.data.Alergia= '';
    this.data.Tipo_sangre= '';
    this.data.Correo= '';   
    this.data.Clave= '';
    this.data.Clave2= ''; 
   
    this.https = https;
  }
  
 login() {
    this.navCtrl.push( Login2Page);
  }

  cargarUsuarios(){
 console.log(this.data.Edad);
 console.log(this.data.Genero);
 console.log(this.data.Alergia);
 console.log(this.data.Tipo_sangre); 

 if(this.data.Clave == this.data.Clave2){
 // this.mesagge = 'Las contraseñas son iguales';
  console.log(this.data.Clave.length)
   if(this.data.Clave.length >= 8){
     if(this.data.Clave.length <= 12 ){
      var contar1 = 0;
      
      var mayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
     
     for (var x = 0; x < mayusculas.length; x++) {
      for (var a = 0; a < this.data.Clave.length; a++) {
      if(this.data.Clave[a]==mayusculas[x]){
      contar1+=1;
          }
        }
      }
       if (contar1 >=1){
        var contar2 = 0;
        
        var minusculas = "abcdefghijklmnñopqrstuvwxyz";
       
       for (var y = 0; y < minusculas.length; y++) {
        for (var b = 0; b < this.data.Clave.length; b++) {
        if(this.data.Clave[b]==minusculas[y]){
        contar2+=1;
            }
          }
        }
        if(contar2 >=1){
          var contar3 = 0;
          
          var numeros = "0123456789";
         
         for (var z = 0; z < numeros.length; z++) {
          for (var c = 0; c < this.data.Clave.length; c++) {
          if(this.data.Clave[c]==numeros[z]){
          contar3+=1;
              }
            }
          }
          if(contar3 >=1){
            var link = 'https://doctores.000webhostapp.com/API/Registro_usuarios.php';
            
           var myData = JSON.stringify({Nombre: this.data.Nombre , Ap_paterno: this.data.Ap_paterno, Ap_materno: this.data.Ap_materno,Edad: this.data.Edad,Genero: this.data.Genero,Alergia: this.data.Alergia,Tipo: this.data.Tipo_sangre, Correo: this.data.Correo, Clave: this.data.Clave, Clave2: this.data.Clave2});
            this.https.post(link, myData)
            .subscribe(data => {
            this.data.response = data["_body"];
            if(this.data.response == 'Usuario registrado correctamente'){
              this.navCtrl.push( Login2Page); 
            }
            
            
          
            }, error => {
            console.log("Oooops!");
            })

            
          }
          else{
            this.mesagge = 'La clave debe tener al menos 1 caracter numérico ';
            
          }
          
          
        }
        else{
          this.mesagge = 'Las contraseña debe de tener minimo 1 minuscula';
        }
        
       }
       else{
        this.mesagge = 'Las contraseña debe de tener minimo 1 mayuscula';
       }
     
     

     }
     else{
      this.mesagge = 'Las contraseña debe de tener maximo 12 caracteres';
     }
    
   }
   else{
    this.mesagge = 'Las contraseña debe de tener minimo 8 caracteres';
   }
  
  } 
 else{
  this.mesagge = 'Las contraseñas son diferentes';
 }

/*
  var link = 'https://doctores.000webhostapp.com/API/Registro_usuarios.php';
  var myData = JSON.stringify({Nombre: this.data.Nombre , Ap_paterno: this.data.Ap_paterno, Ap_materno: this.data.Ap_materno,Edad: this.data.Edad,Genero: this.data.Genero,Alergia: this.data.Alergia,Tipo: this.data.Tipo_sangre, Correo: this.data.Correo, Clave: this.data.Clave, Clave2: this.data.Clave2});
  this.https.post(link, myData)
  .subscribe(data => {
  this.data.response = data["_body"];
  //this.navCtrl.push( Login2Page); 
  

  }, error => {
  console.log("Oooops!");
  })

    */
}
}