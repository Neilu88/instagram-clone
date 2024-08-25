import EditPost from "@/components/EditPost";
import { fetchPostsById } from "@/lib/data";

import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

async function EditPostPage({ params: { id } }: Props) {
  const post = await fetchPostsById(id);

  if (!post) {
    notFound();
  }

  return <EditPost id={id} post={post} />;
}

export default EditPostPage;
