import styles from "./Skills.module.scss"
import pipes1 from "../../images/pipes-1.jpg";
import pipes2 from "../../images/pipes-2.jpg";
import pipes3 from "../../images/pipes-3.jpg";

function Skills() {
  return (
    <div className={`container100 ${styles.skills}`}>
        <h2 className="sectionTitle">What I do?</h2>
        <ul>
            <li className={styles.skillLeft}>
                <div className={styles.skillImage}>
                    <img src={pipes1} alt="image" />
                </div>
                <div className={styles.skillDescription}>
                    <h3 className={styles.skillTitle}>I Design</h3>
                    <p>During the 1990s, computers experienced rapid advancements. Innovations like the World Wide Web revolutionized communication. Tech giants emerged, shaping the digital landscape. The era marked significant milestones in computing history.</p>
                </div>
            </li>
            <li className={styles.skillRight}>
                <div className={styles.skillImage}>
                    <img src={pipes2} alt="image" />
                </div>
                <div className={styles.skillDescription}>
                    <h3 className={styles.skillTitle}>I Code</h3>
                    <p>During the 1990s, computers experienced rapid advancements. Innovations like the World Wide Web revolutionized communication. Tech giants emerged, shaping the digital landscape. The era marked significant milestones in computing history.</p>
                </div>
            </li>
            <li className={styles.skillLeft}>
                <div className={styles.skillImage}>
                    <img src={pipes3} alt="image" />
                </div>
                <div className={styles.skillDescription}>
                    <h3 className={styles.skillTitle}>I Solve</h3>
                    <p>During the 1990s, computers experienced rapid advancements. Innovations like the World Wide Web revolutionized communication. Tech giants emerged, shaping the digital landscape. The era marked significant milestones in computing history.</p>
                </div>
            </li>
        </ul>
    </div>
  );
}

export default Skills;