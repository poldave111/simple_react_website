import styles from "./Intro.module.scss"

function Intro() {
  return (
    <div className={`container100 ${styles.intro}`}>
        <div className={`container100`}>
            <div className={styles.container}>
                <p>Błędne może być kodowanie znaków wpisane w kod strony internetowej <br />
                Błędna może być konfiguracja komputera użytkownika. </p>
            </div>
        </div>
    </div>
  );
}

export default Intro;