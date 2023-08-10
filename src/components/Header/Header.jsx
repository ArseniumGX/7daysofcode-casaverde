import { logo } from "assets";
import styles from "./Header.module.scss";
import { Menu } from "./Menu/Menu";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo casa verde" />
      <Menu />
    </header>
  );
}
