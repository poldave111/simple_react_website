import styles from "./Gallery.module.scss"
import gallery1 from "../../images/gallery-pipes-1.jpg";
import gallery2 from "../../images/gallery-pipes-2.jpg";
import gallery3 from "../../images/gallery-pipes-3.jpg";
import gallery4 from "../../images/gallery-pipes-4.jpg";
import gallery5 from "../../images/gallery-pipes-5.jpg";
import gallery6 from "../../images/gallery-pipes-6.jpg";
import gallery7 from "../../images/gallery-pipes-7.jpg";
import gallery8 from "../../images/gallery-pipes-8.jpg";
import gallery9 from "../../images/gallery-pipes-9.jpg";
import gallery10 from "../../images/gallery-pipes-10.jpg";
import gallery11 from "../../images/gallery-pipes-11.jpg";
import gallery12 from "../../images/gallery-pipes-12.jpg";

function Gallery() {
  return (
    <div>
        <h2 className="sectionTitle">Portfolio</h2>
        <div className={`container100 ${styles.gallery}`}>
        <div className={styles["photo-container"]}>
            <img src={gallery1} />
            <div className={styles.layer}>
                <h4>Lorem Ipsum</h4>
                <button>SEE DETAILS</button>
            </div>
        </div>
        <div className={styles["photo-container"]}>
            <img src={gallery2} />
            <div className={styles.layer}>
                <h4>Lorem Ipsum</h4>
                <button>SEE DETAILS</button>
            </div>
        </div>
        <div className={styles["photo-container"]}>
            <img src={gallery3} />
            <div className={styles.layer}>
                <h4>Lorem Ipsum</h4>
                <button>SEE DETAILS</button>
            </div>
        </div>
        <div className={styles["photo-container"]}>
            <img src={gallery4} />
            <div className={styles.layer}>
                <h4>Lorem Ipsum</h4>
                <button>SEE DETAILS</button>
            </div>
        </div>
        <div className={styles["photo-container"]}>
            <img src={gallery5} />
            <div className={styles.layer}>
                <h4>Lorem Ipsum</h4>
                <button>SEE DETAILS</button>
            </div>
        </div>
        <div className={styles["photo-container"]}>
            <img src={gallery6} />
            <div className={styles.layer}>
                <h4>Lorem Ipsum</h4>
                <button>SEE DETAILS</button>
            </div>
        </div>
        <div className={styles["photo-container"]}>
            <img src={gallery7} />
            <div className={styles.layer}>
                <h4>Lorem Ipsum</h4>
                <button>SEE DETAILS</button>
            </div>
        </div>
        <div className={styles["photo-container"]}>
            <img src={gallery8} />
            <div className={styles.layer}>
                <h4>Lorem Ipsum</h4>
                <button>SEE DETAILS</button>
            </div>
        </div>
        <div className={styles["photo-container"]}>
            <img src={gallery9} />
            <div className={styles.layer}>
                <h4>Lorem Ipsum</h4>
                <button>SEE DETAILS</button>
            </div>
        </div>
        <div className={styles["photo-container"]}>
            <img src={gallery10} />
            <div className={styles.layer}>
                <h4>Lorem Ipsum</h4>
                <button>SEE DETAILS</button>
            </div>
        </div>
        <div className={styles["photo-container"]}>
            <img src={gallery11} />
            <div className={styles.layer}>
                <h4>Lorem Ipsum</h4>
                <button>SEE DETAILS</button>
            </div>
        </div>
        <div className={styles["photo-container"]}>
            <img src={gallery12} />
            <div className={styles.layer}>
                <h4>Lorem Ipsum</h4>
                <button>SEE DETAILS</button>
            </div>
        </div>
    </div>
    </div>
    
  );
}

export default Gallery;