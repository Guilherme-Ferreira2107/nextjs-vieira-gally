import styles from "./sAbout.module.scss";

export default function About() {
  return (
    <section id="sobre" className={styles.container}>
      <div className={styles.boxAbout}>
        <h1>Vieira Gally Advogados</h1>
        <h3>
          Somos um time de advogados brasileiros que promove o acesso à Justiça
          através da Inovação e Tecnologia.
        </h3>
        <p>
          Além de nossa experiência e liderança, com uma prática extremamente
          sofisticada, somos conhecidos como um escritório com ampla experiência
          em assessorar pessoas físicas e jurídicas.
        </p>
        <a href="/#contato">
          <button>Entre em contato</button>
        </a>
      </div>
    </section>
  );
}
