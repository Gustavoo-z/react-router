import styles from './headerlink.module.css';
import { Link, useLocation } from 'react-router-dom';

export default function HeaderLink({ to, children }) {

    const localizacao = useLocation();

    return (
        <Link className={`
            ${styles.link}
            ${localizacao.pathname === to ? styles.linkDestaque : ""}
        `} to={to}>
            {children}
        </Link>
    )
}