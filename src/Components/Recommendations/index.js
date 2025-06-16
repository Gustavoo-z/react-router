import Card from "Components/Card"
import posts from "json/posts.json"
import styles from "./recommendations.module.css"

export default function Recommendations({ id }) {

    const postsFiltrados = posts.filter(post => post.id !== id);

    const recomendados = [...postsFiltrados].sort(() => Math.random() - 0.5).slice(0, 5);

    return (
        <>
            <h1>Outros posts que você pode gostar:</h1>
            <div className={styles.recomendados}>
                {recomendados.map((post) => (
                    <Card key={post.id} posts={post} />
                ))}
            </div>
        </>
    )
}