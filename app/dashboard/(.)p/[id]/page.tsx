import PostView from "@/components/PostView";
import { fetchPostsById } from "@/lib/data";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};
async function PostModal({ params: { id } }: Props) {
  const post = await fetchPostsById(id);
  if (!post) {
    notFound();
  }
  return <PostView id={id} post={post} />;
}
export default PostModal;
