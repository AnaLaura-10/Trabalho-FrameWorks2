import Head from "next/head";
import Cabecalho from "../../componentes/Cabecalho";
import Rodape from "../../componentes/Rodape";
import Entrar from "../../componentes/Entrar"
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.content}>
      <Head>
        <title> ZooAuditory </title>
      </Head>
      <Cabecalho />
      <div className={styles.home}>
        <h1> ZooAuditory</h1>
        <main>
          <p>O ZooAuditory convida você a mergulhar no mundo fascinante dos animais através da descrição detalhada. Nosso site foi cuidadosamente projetado para proporcionar uma experiência enriquecedora para pessoas cegas ou com deficiência visual.</p>
        </main>
        <div className={styles.Entrar}>
        <Entrar />
        </div>
      </div>
      <Rodape />
    </div>
  )
}