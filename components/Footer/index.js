import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

import styles from "./sFooter.module.scss";

export default function Footer() {
  const currentDate = new Date();

  return (
    <footer id="contato" className={styles.container}>
      <div className={styles.bgContacts}>CONTATOS</div>
      <div className={styles.columnFlex}>
        <div className={styles.columnItem}>
          <h3>Endereço</h3>
          <div>
            Rua Eduardo Fontes, n° 09, <br />
            Centro, Itabuna-BA
          </div>
        </div>
        <div className={styles.columnItem}>
          <h3>Contatos</h3>
          <div>
            <a
              href="mailto:levivaz@outlook.com.br"
              target="_blank"
              rel="noreferrer"
            >
              levivaz@outlook.com.br
            </a>
          </div>
          <div>
            <a
              href="https://api.whatsapp.com/send?phone=557388627116"
              target="_blank"
              rel="noreferrer"
            >
              +55 73 8862-7116
            </a>
          </div>

          <div style={{ marginTop: "10px" }}>
            <a href="mailto:cleuderfilho@gmail.com">cleuderfilho@gmail.com</a>
          </div>
          <div>
            <a
              href="https://api.whatsapp.com/send?phone=5573998392987"
              target="_blank"
              rel="noreferrer"
            >
              +55 73 99839-2987
            </a>
          </div>
        </div>
        <div className={styles.columnItem}>
          <h3>Redes Sociais</h3>
          <a
            href="https://www.instagram.com/vieira_gally/?igshid=YmMyMTA2M2Y%3D"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineInstagram style={{ marginRight: "8px" }} />
          </a>
        </div>
      </div>
      <div className={styles.rowExtra}>
        © {currentDate.getFullYear()} - Vieira Gally Advogados. Todos os
        direitos reservados. Criado por{" "}
        <a href="http://guilhermesantos.surge.sh/">Guilherme Santos</a>
      </div>
    </footer>
  );
}
