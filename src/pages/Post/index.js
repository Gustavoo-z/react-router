import PostModel from "Components/PostModel";
import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import "./post.css";
import ReactMarkdown from "react-markdown";
import NotFound from "pages/NotFound";
import DefaultPage from "Components/DefaultPage";

export default function Post() {
    
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    if (!post) {
        return <NotFound />
    }
    
    return (
        <Routes>
            <Route path="*" element={<DefaultPage />}>
                <Route index element={
                    <PostModel fotoCapa={`/assets/posts/${post.id}/capa.png`} titulo={post.titulo}>
                        <p>post {post.id}</p>
                        <div className="post-markdown-container">
                            <ReactMarkdown>{post.texto}</ReactMarkdown>
                        </div>
                    </PostModel>
                } />
            </Route>
            
        </Routes>
    )
}