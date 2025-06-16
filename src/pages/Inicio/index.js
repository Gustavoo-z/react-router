import styles from "./inicio.module.css";
import Card from "Components/Card";

import posts from "json/posts.json";

export default function Inicio() {
    return (
        <ul className={styles.posts}>
            {posts.map((post) => (
                <li key={post.id}>
                    <Card posts={post} />
                </li>
            ))}
        </ul>
    )
}