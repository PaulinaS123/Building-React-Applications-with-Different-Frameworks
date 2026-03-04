import { useParams } from "react-router";

export default function Post() {
  const { slug } = useParams();

  const posts: Record<string, { title: string; content: string }> = {
    "first-post": {
      title: "My First Post",
      content: "This is my first blog post. Welcome!",
    },
    "second-post": {
      title: "My Second Post",
      content: "This is my second blog post.",
    },
  };

  const post = posts[slug || ""];

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
