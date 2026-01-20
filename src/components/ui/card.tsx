import { Blog } from "../../types/blogs";

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:border-indigo-500 border cursor-pointer">
      <p className="text-blue-600 text-xs font-semibold">
        {blog.category.join(" · ")}
      </p>

      <h4 className="font-bold mt-1">{blog.title}</h4>

      <p className="text-gray-600 text-sm mt-1">
        {blog.description}
      </p>

      <p className="text-xs text-gray-400 mt-2">
        {new Date(blog.date).toDateString()}
      </p>
    </div>
  );
}
