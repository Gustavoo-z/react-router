import { Link } from "react-router-dom";
import styles from "./card.module.css";
import Button from "Components/Button";

export default function Card({ posts }) {
    return (
        <Link to ={`/posts/${posts.id}`}>
            <div className={styles.post}>
                <img className={styles.capa} src={`/assets/posts/${posts.id}/capa.png`} alt="Capa do post" />
                <h2 className={styles.titulo}>{posts.titulo}</h2>
                <Button tamanho={"tli"} to={`/posts/${posts.id}`}>Ler</Button>
            </div>
        </Link>
    )
}