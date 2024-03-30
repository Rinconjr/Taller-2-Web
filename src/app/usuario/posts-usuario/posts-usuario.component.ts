import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { mergeMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { Comment } from 'src/app/models/Comment';


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

  comentariosPorPost: { [key: number]: Comment[]; } = {};

  ngOnChanges() {
    if (this.idUsuario) {
      this.buscarPostsYComentariosUsuario();
    }
  }

  buscarPostsYComentariosUsuario() {
    this.http.get<Post>(`${this.ROOT_URL}/posts/user/${this.idUsuario}`).pipe(
      mergeMap((postInfo: any) => {
        // Guardar en el arreglo de publicaciones, 
        // los posts del usuario que es el arreglo con nombre "posts" de la peticion que se realizo
        this.publicaciones = postInfo.posts;

        // Crear un array de observables para cada petición de comentarios
        const comentariosObservables = this.publicaciones.map((post) =>
          this.http.get<Comment>(`${this.ROOT_URL}/comments/post/${post.id}`)
        );

        // Retornar un nuevo observable que combina todos los observables de comentarios
        return forkJoin(comentariosObservables);
      })
    ).subscribe((comentariosArray: any[]) => {
      // Guardar los comentarios en el objeto comentariosPorPost
      comentariosArray.forEach((comentarios, index) => {
        this.comentariosPorPost[this.publicaciones[index].id] = comentarios.comments;
      });
    });
  }
}
