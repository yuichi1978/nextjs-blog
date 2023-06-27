import Link from "next/link";
import Image from "next/image";

import Layout from "../../components/Layout";
import { getPostsData } from "../../lib/post";
import utilStyle from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";

// SSGの場合
export async function getStaticProps() {
  const allPostsData = await getPostsData(); // id, title, date ,thumbnail

  return {
    props: {
      allPostsData,
    },
  };
}

// // SSRの場合
// export async function getServerSideProps(context) {
  
//   return {
//     props: {
//       // コンポーネントに渡すためのprops
//     },
//   }
// }

export default function Home({ allPostsData }) {
  return (
    <Layout title="Home" home>
      <section>
        <p className="my-5 md:my-12 text-base md:text-2xl text-center">私はNextjsエンジニアです<br />好きなフレームワークはNextjsです。</p>
      </section>

      <section>
        <h2 className="text-center mb-7 font-bold text-lg md:text-3xl leading-tight">📝エンジニアのブログ</h2>

        <div className="flex flex-col md:flex-row flex-wrap md:justify-between">
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id} className="w-full md:w-47 mb-5">
              <Link href={`/posts/${id}`}>
                <Image
                  className={styles.thumbnailImage}
                  src={`${thumbnail}`}
                  width={500}
                  height={250}
                  layout="responsive"
                  objectFit="cover"
                  alt="ノートパソコン"
                />
              </Link>
              <Link href={`/posts/${id}`}>
                <a className={utilStyle.boldText}>{title}</a>
              </Link>
              <br />
              <small className={utilStyle.lightText}>{date}</small>
            </article>
          ))}
        </div>

      </section>

      
    </Layout>
  )
}
