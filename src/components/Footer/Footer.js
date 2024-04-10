import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.scss"
import { faChess, faCoffee } from '@fortawesome/free-solid-svg-icons';

function Footer() {

  const currentDate = new Date().toLocaleDateString(); 

  return (
      <footer className={`container100 ${styles.footer}`}>
          <div className={styles["footer-content"]}>
            <p>Dave's Fake Company &copy; {currentDate}</p>
          </div>
      </footer>
  );
}

export default Footer;