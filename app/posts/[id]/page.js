"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getPostById } from "@/lib/api";

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        const response = await getPostById(id);
        const data = response.data;
        const post = data.attributes;
        setPost(post);
      };

      fetchPost();
    }
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default PostPage;
