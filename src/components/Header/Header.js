import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.scss"
import Splash from "../Splash/Splash";

function Header() {
  return (
    <div className={`container100 ${styles.header}`}>
      <Splash />
    </div>
  );
}

export default Header;