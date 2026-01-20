import axios from "axios";
import { Blog } from "../types/blogs";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const getBlogs = async (): Promise<Blog[]> => {
  const { data } = await api.get("/blogs");
  return data;
};

export const getBlogById = async (id: number): Promise<Blog> => {
  const { data } = await api.get(`/blogs/${id}`);
  return data;
};
