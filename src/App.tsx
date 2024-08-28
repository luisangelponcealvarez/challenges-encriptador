import { AreaParaLaDefinición } from "./components/AreaParaLaDefinición";
import { ButtonCopy } from "./components/ButtonCopy";
import { ButtonEncriptar } from "./components/ButtonEncriptar";
import { ButtonDesencriptar } from "./components/ButtonDesencriptar";
import { CombinationsSectionOrEncripter } from "./components/CombinationsSectionOrEncripter";
import { Footer } from "./components/Footer";
import "./index.css";
import styles from "./styles/styles.module.css";

function App() {
  return (
    <>
      <AreaParaLaDefinición />
      <CombinationsSectionOrEncripter />
      <div className={styles.containerAndButtons}>
        <ButtonCopy />
        <ButtonEncriptar />
        <ButtonDesencriptar />
      </div>
      <Footer />
    </>
  );
}

export default App;
