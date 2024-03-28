import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatosUsuarioComponent } from './usuario/datos-usuario/datos-usuario.component';
import { PostsUsuarioComponent } from './usuario/posts-usuario/posts-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    DatosUsuarioComponent,
    PostsUsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    //Para hacer peticiones HTTP
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
