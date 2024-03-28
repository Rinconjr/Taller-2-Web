import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-posts-usuario',
  templateUrl: './posts-usuario.component.html',
  styleUrls: ['./posts-usuario.component.css']
})
export class PostsUsuarioComponent {
  @Input() idUsuario?: number;

  ROOT_URL = "https://dummyjson.com";

  constructor(private http: HttpClient) {}

  publicaciones: Post[] = []

  //Para guardar los comentarios de cada post, se especifica que la llave es de tipo number
  //TODO: Cambiar para que el tipo sea Comment porque no se esta usando.
  comentariosPorPost: { [key: number]: any; } = {};

  ngOnChanges() {
    if (this.idUsuario) {
      this.buscarPostsUsuario();
    }
  }

  //Funcion para buscar los posts del usuario
  buscarPostsUsuario() {
    this.http.get(`${this.ROOT_URL}/posts/user/${this.idUsuario}`).subscribe({
      next: (postInfo: any) => {
        //Guardar en el arreglo de publicaciones, 
        //los posts del usuario que es el arreglo con nombre "posts" de la peticion que se realizo
        this.publicaciones = postInfo.posts;

        //Llamar a buscarComentariosPost para buscar los comentarios de cada post
        this.publicaciones.forEach((post) => {
          this.buscarComentariosPost(post.id);
        });
      }
    });
  }

  
  //Funcion para buscar los comentarios de un post
  buscarComentariosPost(idPost: number) {
    this.http.get(`${this.ROOT_URL}/comments/post/${idPost}`).subscribe({
      next: (comentarios: any) => {
    
        this.comentariosPorPost[idPost] = comentarios.comments;

      }
    });
  }
}
