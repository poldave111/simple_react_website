import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Splash.module.scss"
import { faChess, faCoffee } from '@fortawesome/free-solid-svg-icons';

function Splash() {
  return (
    <div className={`container100 ${styles.splash}`}>
        <div className={styles.splashInner}>
            <div className={styles.container}>
                <FontAwesomeIcon className={styles.icon} icon={faChess} />
                <h1 className={styles.pageTitle}>Hi, I'm Jane Doe.</h1>
                <h2 className={styles.pageSubtitle}>Designer &amp; Web Developer</h2>
            </div>
        </div>
    </div>
  );
}

export default Splash;


