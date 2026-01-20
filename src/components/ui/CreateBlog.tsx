import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function CreateBlog() {
  const queryClient = useQueryClient();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const mutation = useMutation({
    mutationFn: async () => {
      return axios.post("http://localhost:3001/blogs", {
        title,
        description,
        content,
        category: ["FINANCE"],
        coverImage:
          "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
        date: new Date().toISOString(),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      setTitle("");
      setDescription("");
      setContent("");
      alert("Blog created successfully ✅");
    },
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow mt-10">
      <h3 className="text-xl font-bold mb-4">Create New Blog</h3>

      <input
        className="w-full border p-2 rounded mb-3"
        placeholder="Blog title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="w-full border p-2 rounded mb-3"
        placeholder="Short description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <textarea
        className="w-full border p-2 rounded mb-3"
        rows={4}
        placeholder="Blog content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        onClick={() => mutation.mutate()}
        className="bg-indigo-600 text-white px-4 py-2 rounded"
        disabled={mutation.isPending}
      >
        {mutation.isPending ? "Creating..." : "Create Blog"}
      </button>
    </div>
  );
}
