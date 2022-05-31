import Link from 'next/link';
import Layout from '../components/Layout'

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
        <div>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" alt="" />
            </Link>
            <Link href="/">
              <a>SSGとSSRの使い分けの場面はいつなのか？</a>
            </Link>
            <br />
            <small>February 23, 2020</small>
          </article>
        </div>
      </section>
      
    </Layout>
  )
}
