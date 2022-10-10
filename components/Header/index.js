import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { FaLinkedinIn } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsClock } from "react-icons/bs";

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
                size={14}
                style={{ marginBottom: "-2px", marginRight: "8px" }}
              />
              <a
                href="https://api.whatsapp.com/send?phone=557388627116"
                target="_blank"
                rel="noreferrer"
              >
                +55 73 8862-7116
              </a>{" "}
              <span>|</span>{" "}
              <a
                href="https://api.whatsapp.com/send?phone=5573998392987"
                target="_blank"
                rel="noreferrer"
              >
                +55 73 99839-2987
              </a>
            </div>
            <div className={`${styles.dotSpace} ${styles.mr8}`} />
            <div className={styles.mr8}>
              <BsClock
                color="white"
                size={14}
                style={{ marginBottom: "-3px", marginRight: "8px" }}
              />
              <span>Seg - Sex 09:00-17:00</span>
            </div>
          </div>

          <div className={styles.boxFlex}>
            <a
              href="https://www.instagram.com/vieira_gally/?igshid=YmMyMTA2M2Y%3D"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className={`${styles.headerMenu} ${scrollY > 0 && styles.bgDark}`}>
        <div className={styles.sessionWrapper}>
          <div className={styles.titleLogo}>
            {scrollY > 0 && <h4>Vieira Gally</h4>}
          </div>
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
