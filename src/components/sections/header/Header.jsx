import { useContext } from "react";
import { produce } from "immer";
import styles from "./Header.module.css";
import { sharedState } from "../../../App.jsx";

export default function Header() {
  const { state, setState } = useContext(sharedState);

  function edit() {
    const newName = prompt("Change Name", state.name);

    if (newName !== null) {
      setState(
        produce((draft) => {
          draft.name = "";
        })
      );

      setTimeout(() => {
        setState(
          produce((draft) => {
            draft.name = newName;
          })
        );
      }, 100);
    }
  }

  let num = 1;

  return (
    <div className={styles.introHeadings}>
      <div onClick={edit}>
        <div className={styles.animatedWord}>
          {state.name
            .split("")
            .map((letter, index) => (
              <h1
                className={`${styles.firstName} ${styles[state.animationCSS]}`}
                style={{ animationDuration: `1.${num++}s` }}
                data-id={num++}
                key={`${letter}-${index}`}
              >
                {letter}
              </h1>
            ))
            .slice(0, 6)}
        </div>

        <h1 className={styles.lastName}>Morta</h1>
      </div>
      <h3>
        <span className={styles.stack}>MERN Stack</span> Developer
      </h3>
    </div>
  );
}
