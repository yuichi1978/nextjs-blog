import Layout, { singleTitle } from "../../../components/Layout";
import { getAllPostsIds, getPostData } from "../../../lib/post";

import Head from "next/head";

export async function getStaticPaths() {
  const paths = getAllPostsIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="my-5 md:my-12">
        <h1 className="font-bold text-xl leading-tight tracking-tighter">
          {postData.title}
        </h1>
        <div className="text-gray-300 mt-5">
          {postData.date}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.blogContentHTML }}/>
      </article>
    </Layout>
  );
}