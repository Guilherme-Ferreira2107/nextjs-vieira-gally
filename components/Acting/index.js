import Image from "next/image";

import styles from "./sActing.module.scss";
import bg from "../../assets/images/bg-column12.jpg";

export default function Acting() {
  return (
    <section id="atuacao" className={styles.container}>
      <div className={styles.aboutCeo}>
        <div className={styles.wrapperRadius}>
          <div className={styles.boxHalf}>
            <h3>Sobre Vieira Gally</h3>
            <p>
              {" "}
              Somos um time de Advogados que possuem o objetivo em comum de
              proporcionar aos seus parceiros e clientes um serviço jurídico
              diferenciado, com soluções rápidas e eficazes às problemáticas
              apresentadas.
            </p>
            <span>CEO, Vieira Gally Advogados</span>
          </div>
          <div className={styles.boxHalfImage}>
            <Image
              src={bg}
              alt=""
              height="900px"
              priority
              layout="responsive"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
        </div>
      </div>

      <div className={styles.wrapperActing}>
        <center>
          <span>No que somos especialistas</span>
          <h3>Área de Práticas Jurídicas</h3>
        </center>

        <div className={styles.wrapperCards}>
          <div className={styles.wrapperCardInfo}>
            <h3>Advogado Civil</h3>
            <div className={styles.wrapperAnimation}>
              <p>
                Na advocacia cível para elaboração e revisão de
                contratos/distratos, negociação de conflitos com clientes e
                fornecedores. Atuamos no contencioso e preventivo, promovendo
                ainda revisão de procedimentos, auditorias, consultas, contratos
                e pareceres jurídicos.
              </p>
              {/* <a href="https://api.whatsapp.com/send?phone=557388627116">
                <button>Entre em contato</button>
              </a> */}
            </div>
          </div>
          <div className={styles.wrapperCardInfo}>
            <h3>Direito Consumidor</h3>
            <div className={styles.wrapperAnimation}>
              <p>
                Nossos advogados atuam na área de Direito Consumidor, atuam no
                sentido de coibir práticas comerciais abusivas e ilícitas,
                propondo ações e visando a indenização por danos materiais,
                morais e eventuais obrigações de fazer.
              </p>
              {/* <a href="https://api.whatsapp.com/send?phone=557388627116">
                <button>Entre em contato</button>
              </a> */}
            </div>
          </div>
          <div className={styles.wrapperCardInfo}>
            <h3>Advogado Trabalhista</h3>
            <div className={styles.wrapperAnimation}>
              <p>
                Nossos advogados atuam na área de Direito Trabalhista realizando
                a aplicação da norma trabalhista vigente, bem como defendendo os
                interesses de empregadores, especialmente de forma preventiva.
              </p>
              {/* <a href="https://api.whatsapp.com/send?phone=557388627116">
                <button>Entre em contato</button>
              </a> */}
            </div>
          </div>
          <div className={styles.wrapperCardInfo}>
            <h3>Advogado Criminal</h3>
            <div className={styles.wrapperAnimation}>
              <p>
                Nossos advogados são especializados em direito criminal, atuando
                de modo consultivo, preventivo e contencioso, a favor do suposto
                autor do fato ou em defesa daqueles que se sentirem lesados em
                alguma situação conflituosa.
              </p>
              {/* <a href="https://api.whatsapp.com/send?phone=557388627116">
                <button>Entre em contato</button>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
