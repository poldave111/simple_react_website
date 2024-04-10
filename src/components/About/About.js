import styles from "./About.module.scss"

function About() {
  return (
    <div className={`container100 ${styles.about}`}>
        <div className={`container100`}>
            <h2 className="sectionTitle">Hello World!</h2>
            <p>Oczywiście powinno się wszędzie używać kodowania UTF-8, ale nie mówimy o świecie idealnym tylko wręcz przeciwnie: o testowaniu, czy wszystko jest OK.</p>
            <p>Polskie słowa są zazwyczaj dużo dłuższe, niż angielskie czy łacińskie. Ma to ogromny wpływ na wygląd nagłówków czy łamanie się tekstu w węższych kolumnach.</p>
        </div>
    </div>
  );
}

export default About;