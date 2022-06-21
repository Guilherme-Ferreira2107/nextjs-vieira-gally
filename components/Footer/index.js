import styles from "./sFooter.module.scss";

export default function Footer() {
  const currentDate = new Date();

  return (
    <footer id="contato" className={styles.container}>
      <h3>Contato</h3>
      <div>
        <div>Endereço: Rua Eduardo Fontes, n 09, centro, Itabuna-BA</div>
        <div>
          <a href="https://api.whatsapp.com/send?phone=5511986701058">
            +55 (11) 98670-1058
          </a>
        </div>
      </div>
      <div>
        <a href="https://www.instagram.com/vieira_gally/?igshid=YmMyMTA2M2Y%3D">
          Instagram
        </a>
      </div>
      <div>
        ©{currentDate.getFullYear()} - Vieira Gally Advogados. Todos os direitos
        reservados. Criado por{" "}
        <a href="http://guilhermesantos.surge.sh/">Guilherme Santos</a>
      </div>
    </footer>
  );
}
