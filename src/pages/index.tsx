import SEO from '../components/SEO';
import React from 'react';
import styles from '../styles/home.module.scss';

const Home = () => {
  return (
    <>
      <SEO title="Home" />
      <main className={styles.content}>
        <section className={styles.section}>
          <span>Olá Dev!</span>
          <h1>
            Bem vindo e Bem vinda <br />
            ao <span>Dev</span> News!
          </h1>
          <p>
            Um blog com conteúdos extremamente <br />
            <span>relevantes para seu aprendizado.</span>
          </p>
        </section>
        <img src="/home.svg" alt="Home image" />
      </main>
    </>
  );
};
export default Home;
