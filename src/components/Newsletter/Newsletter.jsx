import styles from "./Newsletter.module.scss";

export function Newsletter() {
  return (
    <section className={styles.newsletter}>
      <p className={styles.newsletter__text1}>Sua casa com as</p>
      <p className={styles.newsletter__text2}>melhores plantas</p>
      <p className={styles.newsletter__text3}>
        Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
        torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e
        assine nossa newsletter para saber das novidades da marca.
      </p>
      <div className={styles.newsletter__btnAssinar}>
        <input type="text" placeholder="✉️ Insira seu e-mail" />
        <input type="button" value="Assinar Newsletter" />
      </div>
    </section>
  );
}
