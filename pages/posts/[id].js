import Layout from "../../components/Layout";
import { getAllPostIds } from "../../lib/post";

// SSG
export async function getStaticPaths() {
	const paths = getAllPostIds();
	
	return {
		paths,
		fallback: false, // pathsに含まれていないものは404エラーになる
	}
}

export async function getStaticProps({ params }) {

}

export default function Post() {
	return (
		<Layout>
			動的ルーティング設定
		</Layout>
	);
}
