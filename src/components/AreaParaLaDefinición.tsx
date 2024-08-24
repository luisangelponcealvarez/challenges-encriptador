import styles from "../styles/styles.module.css";

export function AreaParaLaDefinición() {
  return (
    <section>
      <div className={styles.sectionTitle}>
        <h1 className={styles.title}>Challenges Encriptador</h1>

        <a
          href="https://github.com/luisangelponcealvarez/challenges-encriptador"
          className={styles.icon}
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>

      <p className={styles.text}>
        Este es el primer Desafío del programa ONE - Oracle Next Education, en
        el que se nos pedía que hiciéramos un encriptador de texto, con el que
        se pudieran intercambiar mensajes secretos con otras personas que
        conocieran el secreto de la encriptación utilizada.
      </p>
    </section>
  );
}
