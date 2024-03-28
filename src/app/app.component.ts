import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ROOT_URL = "https://dummyjson.com";

  title = 'Taller-RXJS';
  titulo_header = "Taller 2 Web"

  txtUser: string = "";

  constructor(private http: HttpClient) {}

  user$: Observable<any> = new Observable();

  usuario: User | null = null;

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
