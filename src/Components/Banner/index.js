import styles from "./banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha_foto.png";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div>
                <h1 className={styles.titulo}>Ola, Mundo!</h1>
                <p className={styles.paragrafo}>Bem vindo ao meu blog pessoal desenvolvido com React para um curso da plataforma Alura.</p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} alt="Circulo colorido" aria-hidden={true} />
                <img className={styles.minhaFoto} src={minhaFoto} alt="Foto de perfil" />
            </div>
        </div>
    )
}