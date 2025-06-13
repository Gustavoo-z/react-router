import styles from "./postmodel.module.css";

export default function PostModel({children, fotoCapa, titulo }) {
    return (
        <article className={styles.postModeloContainer}>
            <div style={{ backgroundImage: `url(${fotoCapa})` }} className={styles.fotoCapa} />
            
            <h2 className={styles.titulo}>{titulo}</h2>
            
            <div className={styles.postConteudoContainer}>{children}</div>
        </article>
    );
}