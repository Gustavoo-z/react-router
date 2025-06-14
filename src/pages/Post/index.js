import PostModel from "Components/PostModel";
import { useParams } from "react-router-dom";
import posts from "json/posts.json";

export default function Post() {
    
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })
    
    return (
        <PostModel fotoCapa={`/assets/posts/${post.id}/capa.png`} titulo={post.titulo}>
            <p>post {post.id}</p>
        </PostModel>
    )
}