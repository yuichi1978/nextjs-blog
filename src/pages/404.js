import Layout from "../../components/Layout";

export default function Custom404() {
  return (
    <Layout title="404Page">
      <div className="flex flex-col items-center justify-center">
        <p className="mt-10">ページが見つかりませんでした。</p>
      </div>
    </Layout>
  )
}