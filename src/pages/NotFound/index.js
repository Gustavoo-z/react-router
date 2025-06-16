import Button from "Components/Button";
import styles from "./notfound.module.css";
import erro404 from "assets/erro_404.png";
import { useNavigate } from "react-router-dom";

export default function NotFound() {

    const navegar = useNavigate();

    return (
        <>
            <div className={styles.conteudoContainer}>
                <h1 className={styles.texto404}>404</h1>
                <h2 className={styles.titulo}>Ops! Página nao encontrada.</h2>
                <p className={styles.paragrafo}>Tem certeza de que era isso que estava procurando?</p>
                <div className={styles.botaoContainer} onClick={() => navegar(-1)}>
                    <Button tamanho="lg">Voltar</Button>
                </div>
                <img src={erro404} alt="Cachorro de oculos" className={styles.imagemCachorro} />
            </div>
            <div className={styles.espacoEmBranco}></div>
        </>
    )
}