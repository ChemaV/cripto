'use client';
import Image from 'next/image';
import styles from './footer.module.css';

export default function FooterTw() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <div>APIs usadas:</div>
          <div className={styles.apiLinks}>
            <a href="https://developers.coinranking.com/api/documentation" className={styles.link}>Coinranking API</a>
            <a href="https://www.microsoft.com/en-us/bing/apis/bing-news-search-api" className={styles.link}>Bing News Search API</a>
          </div>
        </div>
        <div>
          <p>All Blocks. Todos los derechos reservados: Ernesto, Jorge, Chema y Alejandra.</p>
            <p>Proyecto Consumo de API con Nextjs para curso Desarrollo web full stack con tecnologías inmersivas de Factoría F5 y Fundación Tomillo.</p>
          <Image alt="Imagotipo" src="/logo/imagotipo.svg" width={55} height={60} />
        </div>
      </div>
    </footer>
  );
};