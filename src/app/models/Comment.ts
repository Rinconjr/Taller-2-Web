//Interfaz para representar el comentario
export interface Comment{
    id: number;
    body: string;
    postId: number;
    userId: number;
    user: {
        id:number;
        username: string;
    };
}