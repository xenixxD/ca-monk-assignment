import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "./card";
import { Blog } from "../../types/blogs";

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Card className="max-w-xl mx-auto">
      <CardHeader>
        <CardTitle>{blog.title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground">
          {blog.description}
        </p>
      </CardContent>
    </Card>
  );
}
