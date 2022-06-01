/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import Layout from '../components/Layout';
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <p>
          私はフルスタックエンジニアです。会社経営者ととして活動しています。好きなFWはLaravelです。
        </p>
      </section>

      <section>
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
            <img
              src="/images/thumbnail01.jpg"
              alt=""
              className={styles.thumbnailImage}
            />
            </Link>
            <Link href="/">
              <a className={utilStyles.boldText}>SSGとSSRの使い分けの場面はいつなのか？</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>February 23, 2020</small>
          </article>
          <article>
            <Link href="/">
            <img
              src="/images/thumbnail01.jpg"
              alt=""
              className={styles.thumbnailImage}
            />
            </Link>
            <Link href="/">
              <a className={utilStyles.boldText}>SSGとSSRの使い分けの場面はいつなのか？</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>February 23, 2020</small>
          </article>
          <article>
            <Link href="/">
            <img
              src="/images/thumbnail01.jpg"
              alt=""
              className={styles.thumbnailImage}
            />
            </Link>
            <Link href="/">
              <a className={utilStyles.boldText}>SSGとSSRの使い分けの場面はいつなのか？</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>February 23, 2020</small>
          </article>
          <article>
            <Link href="/">
            <img
              src="/images/thumbnail01.jpg"
              alt=""
              className={styles.thumbnailImage}
            />
            </Link>
            <Link href="/">
              <a className={utilStyles.boldText}>SSGとSSRの使い分けの場面はいつなのか？</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>February 23, 2020</small>
          </article>
        </div>
      </section>
      
    </Layout>
  )
}
