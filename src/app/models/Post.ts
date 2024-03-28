//Interfaz para representar el post
export interface Post{
    id: number;
    title: string;
    body: string;
    userId: number;
    reactions: number;
    //Poner comentarios tipo Comentario?
}