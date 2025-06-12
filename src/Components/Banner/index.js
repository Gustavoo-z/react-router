import styles from "./banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div>
                <h1 className={styles.titulo}>Ola, Mundo!</h1>
                <p className={styles.paragrafo}>Bem vindo ao meu blog pessoal.</p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} alt="Circulo colorido" aria-hidden={true} />
                <img className={styles.minhaFoto} src={circuloColorido} alt="Foto de perfil" />
            </div>
        </div>
    )
}