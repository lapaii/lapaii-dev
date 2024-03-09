import { getLongFormattedDate } from "@/lib/formattedDate";
import { getPostsData, getPostData } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
	const posts = await getPostsData();

	return posts.map((post) => ({
		postId: post.id,
	}));
}

export async function generateMetadata({ params }: { params: { postid: string } }) {
	const posts = getPostsData();
	const { postid } = params;

	const post = (await posts).find((post) => post.id === postid);

	if (!post) {
		return {
			title: "post not found!",
		};
	}

	return {
		title: "lapaii | " + post.title,
	};
}

export default async function Post({ params }: { params: { postid: string } }) {
	const posts = getPostsData();
	const { postid } = params;

	if (!(await posts).find((post) => post.id === postid)) notFound();

	const { title, date, contentHtml } = await getPostData(postid);

	const publishedDate = getLongFormattedDate(date);

	return (
		<div className="h-screen">
			<div className="m-5 text-center justify-center items-center flex flex-col">
				<div className="m-5 p-5 md:w-1/2 bg-hovercol outline outline-normalcol rounded-3xl justify-center items-center flex flex-col ">
					<div className="w-full p-5 md:flex md:flex-row md:justify-center md:items-center">
						<h1 className="md:text-4xl md:w-1/2 text-3xl text-darkercol">{title}</h1>
						<p className="md:text-3xl md:w-1/2 text-2xl text-normalcol">{publishedDate}</p>
					</div>
					<h1 className="md:text-2x text-xl text-normalcol" dangerouslySetInnerHTML={{ __html: contentHtml }}/>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center">
				<div className="bg-hovercol outline outline-normalcol rounded-3xl justify-center items-center flex flex-col">
					<Link className="p-5 md:text-3xl text-2xl text-linkcol hover:text-normalcol" href="/blog/">return to blog home</Link>
				</div>
			</div>
		</div>
  	);
}
