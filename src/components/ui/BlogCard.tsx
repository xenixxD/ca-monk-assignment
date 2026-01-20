import Card from "./card";
import { Blog } from "../../types/blogs";

export default function BlogCard({ blog }: { blog: Blog }) {
  return <Card blog={blog} />;
}
