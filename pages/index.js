import Head from "next/head";

import Header from "../components/Header";
import About from "../components/About";
import Acting from "../components/Acting";
import Footer from "../components/Footer";

import styles from "./styles.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vieira Gally</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.presentations}>
        <div className={styles.menuFixed}>
          <Header />
        </div>
        <About />
      </div>
      <Acting />
      <div className={styles.resume}>
        <div>
          <h5>Consulte nos gratuitamente!</h5>
          <span>
            A lei é um assunto complicado, Se ignorá-la, ela se tornará um
            grande problema.
          </span>
          <br />
          <span>Deixe-nos ajudá-los, entre em contato!</span>
        </div>
      </div>
      <Footer />

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          scroll-behavior: smooth;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
