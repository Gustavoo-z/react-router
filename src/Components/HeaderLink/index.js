import styles from './headerlink.module.css';
import { NavLink } from 'react-router-dom';

export default function HeaderLink({ to, children }) {

    return (
        <NavLink className={({ isActive }) =>`
            ${styles.link}
            ${isActive ? styles.linkDestaque : ""}
        `} to={to}
            end
        >
            {children}
        </NavLink>
    )
}