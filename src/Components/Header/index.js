import HeaderLink from '../HeaderLink';
import styles from './header.module.css';

export default function Header() {
    return (
        <header>
            <nav className={styles.navegacao}>      
                <HeaderLink to="/">Inicio</HeaderLink>
                <HeaderLink to="/sobremim">Sobre mim</HeaderLink>             
            </nav>
        </header>
    )
}