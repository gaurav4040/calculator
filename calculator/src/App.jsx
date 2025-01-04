import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import styles from "./App.module.css";

function App() {

  return (
    <div className={styles.calculator} >
      <Display />
      <ButtonContainer/>
    </div>
  )
}

export default App;
