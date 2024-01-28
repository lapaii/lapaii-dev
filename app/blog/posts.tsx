import { getPostsData } from "@/lib/posts";
import PostButton from "./postButton";

export default function posts() {
  const posts = getPostsData();

  return (
    <section>
      {posts.map((post) => (
        <PostButton key={post.id} post={post} />
      ))}
    </section>
  );
}
