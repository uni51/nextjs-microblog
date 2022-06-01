/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import Layout, { siteTitle } from '../components/Layout';
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import { getPostsData } from '../lib/post';
import Head from 'next/head';

// SSGの場合（外部のデータをビルド時に一度だけ読み込む）
export async function getStaticProps() {
  const allPostData = getPostsData(); // id , title, date, thumbnail

  return {
    props: {
      allPostData,
    },
  };
}

// SSRの場合
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // コンポーネントに渡すためのProps 
//     },
//   };
// }

export default function Home({ allPostData }) {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          私はNext.js学習中のエンジニアです。会社経営者ととして活動しています。好きなFWはLaravelです。
        </p>
      </section>

      <section>
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostData.map(({id, title, date, thumbnail}) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
              <img
                src={thumbnail}
                alt=""
                className={styles.thumbnailImage}
              />
              </Link>
              <Link href={`/posts/${id}`}>
                <a className={utilStyles.boldText}>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>{date}</small>
            </article>
            ))}
        </div>
      </section>
      
    </Layout>
  )
}
