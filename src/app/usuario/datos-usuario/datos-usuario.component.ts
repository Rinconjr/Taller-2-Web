import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-datos-usuario',
  templateUrl: './datos-usuario.component.html',
  styleUrls: ['./datos-usuario.component.css']
})
export class DatosUsuarioComponent {
  ROOT_URL = "https://dummyjson.com";

  title = 'Taller-RXJS';
  
  txtUser: string = "";

  constructor(private http: HttpClient) {}

  usuario: User | null = null;

  //Funcion para buscar los datos del usuario
  buscarUsuario() {
    this.http.get(`${this.ROOT_URL}/users/filter?key=username&value=${this.txtUser}`).subscribe({
      next: (userInfo: any) => {
        if (userInfo.users.length > 0) {
          this.usuario = userInfo.users[0];
        } else {
          this.usuario = null;
        }
      }
    }); 
  }
}
