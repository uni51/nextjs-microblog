import path from "path";
import fs from "fs";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

// mdファイルのデータを取り出す
export function getPostsData() {
	const fileNames = fs.readdirSync(postsDirectory);
	const allPostData = fileNames.map((fileName) => {
		const id = fileName.replace(/\.md$/, ""); // ファイル名

		// マークダウンファイルを文字列として読み取る
		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf-8");

		const matterResult = matter(fileContents);

		// idとデータを返す
		return {
			id,
			...matterResult.data, // 1つ1つ取り出す
		}
	});

	return allPostData;
}

// getStaticPathでreturnで使うpathを取得する
export function getAllPostIds() {
	const fileNames = fs.readdirSync(postsDirectory);
	return fileNames.map((fileName) => {
		return {
			params: {
				id: fileName.replace(/\.md$/, ""),
			}
		}
	});
	/*
		[
			{
				params: {
					id: "ssg-ssr"
				}
			},
			{
				params: {
					id: "next-react"
				}
			},
		]
	*/
}
