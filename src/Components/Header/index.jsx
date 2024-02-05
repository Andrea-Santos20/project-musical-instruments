import styles from "./Header.module.css";

export default function Header() {
  

  return (
    <header className={styles.start}>
      
      <nav className={styles.nav}>
        <a href="">Home</a>
        <a href="#instruments">Instrumentos</a>
      </nav>
    </header>
  );
}