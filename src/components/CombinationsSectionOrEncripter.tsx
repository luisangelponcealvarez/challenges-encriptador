import styles from "../styles/styles.module.css";

export function CombinationsSectionOrEncripter() {
  return (
    <section>
      <h3 className={styles.title}>
        The encryption "keys" used are the following:
      </h3>

      <p className={styles.text}>
        The letter "e" is converted for "enter" The letter "i" is converted for
        "imes" The letter "a" is converted for "ai" The letter "o" is converted
        for "ober" The letter "u" is converted for "ufat"
      </p>
    </section>
  );
}
