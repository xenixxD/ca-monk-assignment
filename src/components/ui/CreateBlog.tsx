import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type CreateBlogPayload = {
  title: string;
  description: string;
  content: string;
};

export default function CreateBlog() {
  const queryClient = useQueryClient();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const createBlogMutation = useMutation({
    mutationFn: async (data: CreateBlogPayload) => {
      const res = await axios.post("http://localhost:3001/blogs", {
        ...data,
        category: ["FINANCE"],
        coverImage:
          "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
        date: new Date().toISOString(),
      });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });

      // reset form
      setTitle("");
      setDescription("");
      setContent("");
    },
  });

  const handleSubmit = () => {
    if (!title || !description || !content) return;

    createBlogMutation.mutate({
      title,
      description,
      content,
    });
  };

  return (
    <Card className="max-w-2xl mx-auto mt-10">
      <CardHeader>
        <CardTitle>Create New Blog</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <Input
          placeholder="Blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Input
          placeholder="Short description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Textarea
          placeholder="Write full blog content..."
          rows={6}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <Button
          className="w-full"
          onClick={handleSubmit}
          disabled={createBlogMutation.isPending}
        >
          {createBlogMutation.isPending ? "Publishing..." : "Publish Blog"}
        </Button>

        {createBlogMutation.isError && (
          <p className="text-sm text-red-500">
            Failed to create blog. Please try again.
          </p>
        )}

        {createBlogMutation.isSuccess && (
          <p className="text-sm text-green-600">
            Blog created successfully!
          </p>
        )}
      </CardContent>
    </Card>
  );
}
