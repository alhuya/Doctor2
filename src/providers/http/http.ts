import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {
  username : string;
 
  path : string = 'http://doctores.000webhostapp.com/API/listar_especialidades.php';
  path2 : string = 'https://doctores.000webhostapp.com/API/listar_doctores.php';
  path3 : string = 'http://doctores.000webhostapp.com/API/listar_citas_totales.php';
  path4 : string = 'https://doctores.000webhostapp.com/API/listar_receta.php';

  constructor(public http: Http) {
   
  }


  loadUsers(){
    return this.http
    .get(this.path)
    .map(res => res.json(),
        err => {
          console.log(err);
        }
      )
      .toPromise();
    }

    loadDoctores(){
      return this.http
      .get(this.path2)
      .map(res => res.json(),
          err => {
            console.log(err);
          }
        )
        .toPromise();
      }
      loadcitas(){
        return this.http
        .get(this.path3)
        .map(res => res.json(),
            err => {
              console.log(err);
            }
          )
          .toPromise();

      }
      loadrecetas(){
        return this.http
        .get(this.path4)
        .map(res => res.json(),
            err => {
              console.log(err);
            }
          )
          .toPromise();

      }

      
}
