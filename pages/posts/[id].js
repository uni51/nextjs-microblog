import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/post";

// SSG
export async function getStaticPaths() {
	const paths = getAllPostIds();
	
	return {
		paths,
		fallback: false, // pathsに含まれていないものは404エラーになる
	}
}

// SSGの場合（外部のデータをビルド時に一度だけ読み込む）
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
			{postData.title}
			<br />
			{postData.date}
			<br />
			{postData.blogContentHTML}
		</Layout>
	);
}
