import PostModel from "Components/PostModel";
import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import "./post.css";
import ReactMarkdown from "react-markdown";
import NotFound from "pages/NotFound";
import DefaultPage from "Components/DefaultPage";
import Recommendations from "Components/Recommendations";
import { useEffect, useRef } from "react";

export default function Post() {
    
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    useEffect(() => {
        if (articleRef.current) {
            articleRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [post]);
    
    const articleRef = useRef(null);
    
    if (!post) {
        return <NotFound />
    }

    return (
        <Routes>
            <Route path="*" element={<DefaultPage />}>
                <Route index element={
                    <PostModel fotoCapa={`/assets/posts/${post.id}/capa.png`} titulo={post.titulo}
                    articleRef={articleRef}>
                        <div className="post-markdown-container">
                            <ReactMarkdown>{post.texto}</ReactMarkdown>
                        </div>
                        <Recommendations id={post.id} />
                    </PostModel>
                } />
            </Route>
        </Routes>
    )
}