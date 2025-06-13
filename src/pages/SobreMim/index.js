import PostModel from "Components/PostModel";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from "./sobremim.module.css";
import fotoSobreMim from "assets/minha_foto.png";

export default function SobreMim() {
    return (
        <>
            <PostModel fotoCapa={fotoCapa} titulo="Sobre mim">

                <h3 className={styles.subtitulo}>Olá, eu sou o Gustavo!</h3>

                <img src={fotoSobreMim} alt="Foto de Gustavo" className={styles.fotoSobreMim}></img>

                <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou o Gustavo, desenvolvedor Full Stack em formação e apaixonado por tecnologia. Fico feliz em te ver por aqui!
                </p>
                <p className={styles.paragrafo}>
                Minha jornada com programação começou na prática, dentro do ambiente profissional. Comecei atuando com automação de processos e fui me aprofundando em ferramentas como Power Automate, SQL e JavaScript. Aos poucos, fui percebendo o quanto gosto de transformar operações com tecnologia e decidi me especializar de verdade.
                </p>
                <p className={styles.paragrafo}>
                Por isso, escolhi cursar Análise e Desenvolvimento de Sistemas pela UNINTER, onde aprofundei meus conhecimentos em desenvolvimento de software. Também investi pesado em formações práticas pela Alura, como Front-end, Back-end com Node.js, APIs REST, WebSockets, bancos de dados e muito mais.
                </p>
                <p className={styles.paragrafo}>
                Com o tempo, comecei a desenvolver meus próprios projetos, como calculadoras financeiras para educação, ferramentas de organização pessoal e um catálogo de séries e filmes com favoritos. Esses projetos me ajudaram a reforçar conceitos de lógica, persistência de dados, documentação com Swagger e autenticação com JWT.
                </p>
                <p className={styles.paragrafo}>
                Hoje, vejo o quanto evoluí e estou cada vez mais motivado a seguir criando soluções que tenham impacto real. Meu objetivo é continuar aprendendo, construindo projetos úteis e colaborando em times que valorizem a tecnologia como ferramenta de transformação.
                </p>
                <p className={styles.paragrafo}>
                Espero que meu trabalho possa inspirar você também a aprender, construir e crescer nessa área incrível que é o desenvolvimento!
                </p>

            </PostModel>
        </>
    )
}