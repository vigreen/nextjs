import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tailwind + NextJS App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js</a>
        </h1>
        +<p className={styles.description}>Tailwind template!</p>
        <footer className={styles.footer}>
          <p>Deployed on </p>
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </footer>
      </main>
    </div>
  );
}
