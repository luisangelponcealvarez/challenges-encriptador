import styles from "../styles/styles.module.css";

export function ButtonEncriptar() {
  const encriptar = () => {
    const texto = document.querySelector("textarea")?.value || "";
    const textoEncriptado = texto
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

    const outputElement = document.querySelector("#output");
    if (outputElement) {
      outputElement.textContent = textoEncriptado;
    }
  };

  const handleClick = () => {
    encriptar();
  };

  return (
    <>
      <button className={styles.button} onClick={handleClick}>
        Encriptar
      </button>
    </>
  );
}
