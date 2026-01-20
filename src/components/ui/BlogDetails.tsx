import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "../../api/blogs";
import { Blog } from "../../types/blogs";

export default function BlogDetails() {
  // TEMPORARY: hardcoded blog id
  const blogId = 1;

  const {
    data: blog,
    isLoading,
    isError,
  } = useQuery<Blog>({
    queryKey: ["blog", blogId],
    queryFn: () => getBlogById(blogId),
  });

  if (isLoading) {
    return <p>Loading blog...</p>;
  }

  if (isError || !blog) {
    return <p>Error loading blog</p>;
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <img
        src={blog.coverImage}
        alt={blog.title}
        className="rounded-lg mb-6 w-full h-64 object-cover"
      />

      <p className="text-blue-600 font-semibold text-sm mb-2">
        {blog.category.join(" • ")} • 5 min read
      </p>

      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

      <p className="text-gray-600 leading-relaxed whitespace-pre-line">
        {blog.content}
      </p>
    </div>
  );
}
