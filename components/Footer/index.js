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
            Rua Eduardo Fontes, n 09, <br />
            centro, Itabuna-BA
          </div>
        </div>
        <div className={styles.columnItem}>
          <h3>Contato</h3>
          <div>
            Email: <a href="mailto:levi@gmail.com">levi@gmail.com</a>
          </div>
          <div>
            Phone:{" "}
            <a href="https://api.whatsapp.com/send?phone=5511986701058">
              +55 (11) 98670-1058
            </a>
          </div>
        </div>
        <div className={styles.columnItem}>
          <h3>Redes Sociais</h3>
          <a href="https://www.instagram.com/vieira_gally/?igshid=YmMyMTA2M2Y%3D">
            <AiOutlineInstagram style={{ marginRight: "8px" }} />
          </a>
          <a href="https://www.instagram.com/vieira_gally/?igshid=YmMyMTA2M2Y%3D">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div className={styles.rowExtra}>
        ©{currentDate.getFullYear()} - Vieira Gally Advogados. Todos os direitos
        reservados. Criado por{" "}
        <a href="http://guilhermesantos.surge.sh/">Guilherme Santos</a>
      </div>
    </footer>
  );
}