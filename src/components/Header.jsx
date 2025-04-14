import styles from './Header.module.css'
import toDoList from '../assets/ToDoList-Logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={toDoList} alt="Logo ToDo List" />
        </header>
    )
}