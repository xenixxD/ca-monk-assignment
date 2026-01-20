import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "../../api/blogs";
import BlogCard from "./BlogCard";

export default function BlogList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  if (isLoading) return <p>Loading blogs...</p>;
  if (isError) return <p>Error loading blogs</p>;

  return (
    <div className="space-y-4">
      <h3 className="font-semibold mb-4">Latest Articles</h3>
      {data!.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
