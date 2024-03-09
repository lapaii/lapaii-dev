import { getPostsData } from "@/lib/posts";
import PostButton from "./postButton";

export default async function posts() {
  const posts = await getPostsData();

	return (
		<section>
			{posts.map((post) => (
				<PostButton key={post.id} post={post} />
			))}
		</section>
	);
}
