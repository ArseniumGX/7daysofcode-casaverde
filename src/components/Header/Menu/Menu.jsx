import styles from "./Menu.module.scss";

export function Menu() {
  return (
    <nav className={styles.menu}>
      <ul>
        <li>
          <a href="/">Como fazer</a>
        </li>
        <span>/</span>
        <li>
          <a href="/">Ofertas</a>
        </li>
        <span>/</span>
        <li>
          <a href="/">Depoimentos</a>
        </li>
        <span>/</span>
        <li>
          <a href="/">Vídeos</a>
        </li>
        <span>/</span>
        <li>
          <a href="/">Meu carrinho</a>
        </li>
      </ul>
    </nav>
  );
}
