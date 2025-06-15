import styles from "./notfound.module.css";
import erro404 from "assets/erro_404.png";

export default function NotFound() {
    return (
        <>
            <div className={styles.conteudoContainer}>
                <h1 className={styles.texto404}>404</h1>
                <h2 className={styles.titulo}>Ops! Página nao encontrada.</h2>
                <p className={styles.paragrafo}>Tem certeza de que era isso que estava procurando?</p>
                <div className={styles.botaoContainer}>
                    <button className={styles.botao} href="/">Voltar</button>
                </div>
                <img src={erro404} alt="Cachorro de oculos" className={styles.imagemCachorro} />
            </div>
            <div className={styles.espacoEmBranco}></div>
        </>
    )
}