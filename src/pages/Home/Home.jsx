import { Header, Newsletter, Wrapper } from "components";
import { graphYellow } from "assets";
import styles from "./Home.module.scss";

export function Home() {
  return (
    <Wrapper>
      <Header />
      <main className={styles.main}>
        <img src={graphYellow} />
        <Newsletter />
      </main>
    </Wrapper>
  );
}
