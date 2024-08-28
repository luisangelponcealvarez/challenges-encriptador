import styles from "../styles/styles.module.css";

export function ButtonCopy() {
  const handleCopy = () => {
    const outputText = document.getElementById("output-texto");
    if (outputText) {
      const textToCopy = outputText.textContent || "";
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          console.log("Texto copiado al portapapeles");
        })
        .catch((err) => {
          console.error("Error al copiar texto: ", err);
        });
    }
  };

  return (
    <>
      <button className={styles.button} id="output-texto" onClick={handleCopy}>
        Copiar
      </button>
    </>
  );
}
