import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { FaLinkedinIn } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineInstagram } from "react-icons/ai";

import styles from "./sHeader.module.scss";
import logo from "../../assets/images/logo.jpg";

export default function Header() {
  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  return (
    <header id="inicio" className={styles.container}>
      <div className={`${scrollY > 0 ? styles.hidden : styles.headerContact}`}>
        <div className={styles.sessionWrapper}>
          <div className={styles.boxFlex}>
            <div className={styles.mr8}>
              <MdPhoneIphone
                color="white"
                size={16}
                style={{ marginBottom: "-2px" }}
              />
              <a
                className={styles.ml8}
                href="https://api.whatsapp.com/send?phone=5511986701058"
              >
                +55 (11) 98670-1058
              </a>
            </div>
            <div className={`${styles.dotSpace} ${styles.mr8}`} />
            <div className={styles.mr8}>
              <HiOutlineMail
                color="white"
                size={16}
                style={{ marginBottom: "-3px" }}
              />
              <a className={styles.ml8} href="mailto:info@gmail.com">
                levivaz@vieiragallyadvogados.com
              </a>
            </div>
          </div>

          <div>
            <a href="https://www.instagram.com/vieira_gally/?igshid=YmMyMTA2M2Y%3D">
              <AiOutlineInstagram />
            </a>
            <a
              className={styles.ml8}
              href="https://www.instagram.com/vieira_gally/?igshid=YmMyMTA2M2Y%3D"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className={`${styles.headerMenu} ${scrollY > 0 && styles.bgDark}`}>
        <div className={styles.sessionWrapper}>
          <Image src={logo} alt="Logo" width={60} height={60} />
          <nav>
            <ul>
              <li>
                <Link href="/#sobre">
                  <a>Sobre</a>
                </Link>
              </li>
              <li>
                <Link href="/#atuacao">
                  <a>Atuação</a>
                </Link>
              </li>
              <li>
                <Link href="/#contato">
                  <a>Contato</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
