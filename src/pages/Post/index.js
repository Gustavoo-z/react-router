import PostModel from "Components/PostModel";
import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import "./post.css";
import ReactMarkdown from "react-markdown";

export default function Post() {
    
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    if (!post) {
        return <h1>Post não encontrado...</h1>
    }
    
    return (
        <PostModel fotoCapa={`/assets/posts/${post.id}/capa.png`} titulo={post.titulo}>
            <p>post {post.id}</p>
            <div className="post-markdown-container">
                <ReactMarkdown>{post.texto}</ReactMarkdown>
            </div>
        </PostModel>
    )
}