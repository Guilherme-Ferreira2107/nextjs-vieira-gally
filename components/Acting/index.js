import styles from "./sActing.module.scss";

export default function Acting() {
  return (
    <section id="atuacao" className={styles.container}>
      <h1>Atuação</h1>

      <div>
        <h3>Advogado Civil</h3>
        <p>
          Advocacia civil para elaboração e revisão de contratos, negociação de
          conflitos com clientes e fornecedores, arbitragem e mediação cível e
          comercial. Atuamos no contencioso e preventivo, e fazemos revisão de
          procedimentos, auditoria, consultas, contratos e pareceres jurídicos.
          Atuamos em ações possessórias, reivindicatórias, locação, execuções,
          monitórias, prestação de contas, cautelares e demais procedimentos
          especiais. Efetuamos ações no âmbito da responsabilidade civil e
          indenização por danos morais.
        </p>
      </div>
      <div>
        <h3>Direito Consumidor</h3>
        <p>
          Nossos advogados atuam na área de Direito Consumidor, atuando no
          sentido de coibir práticas comerciais abusivas e ilícitas, propondo
          ações e visando a indenização por danos materiais e morais, com ênfase
          nas seguintes áreas: morais.
        </p>
      </div>
      <div>
        <h3>Advogado Trabalhista</h3>
        <p>
          Nossos advogados atuam na área de Direito Trabalhista realizando
          avaliação das relações de trabalho sob a ótica do direito civil,
          societário e tributário.
        </p>
      </div>

      <div>
        <h3>Advogado Criminal</h3>
        <p>
          Nossos advogados são especializados em direito criminal, atuando de
          modo consultivo, preventivo e contencioso, a favor do autor ou em
          defesa do réu.
        </p>
        <a href="/#contato">Entre em Contato</a>
      </div>
    </section>
  );
}
