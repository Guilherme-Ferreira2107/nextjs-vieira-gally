import { BsArrowDown } from "react-icons/bs";

import styles from "./sAbout.module.scss";

export default function About() {
  return (
    <section id="sobre" className={styles.container}>
      <div className={styles.boxAbout}>
        <h1>Vieira Gally Advogados</h1>
        <h3>SOLUÇÕES RÁPIDAS E EFICAZES</h3>
        <p>
          Para nós, a ética e eficiência profissional são valores inegociáveis.
          Por isso contamos com uma equipe de profissionais especializados, um
          ambiente confortável e completo, composto de sala de reuniões e salas
          de atendimento.
        </p>
        <a href="/#contato">
          <button>Entre em contato</button>
        </a>
      </div>
      <div id="aboutCeo" className={styles.arrowDown}>
        <a href="#aboutCeo">
          <BsArrowDown size={40} />
        </a>
      </div>
    </section>
  );
}
