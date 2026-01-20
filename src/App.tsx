import BlogList from "./components/ui/BlogList";
import BlogDetails from "./components/ui/BlogDetails";
import CreateBlog from "./components/ui/CreateBlog";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-10 py-4 flex justify-between">
        <h1 className="font-bold">CA MONK</h1>
        <button className="bg-indigo-600 text-white px-4 py-1 rounded">
          Profile
        </button>
      </nav>

      <div className="text-center py-12">
        <h2 className="text-4xl font-bold">CA Monk Blog</h2>
        <p className="text-gray-600 mt-2">
          Stay updated with the latest trends in finance and accounting
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <BlogList />
        <div className="md:col-span-2">
          <BlogDetails />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <CreateBlog />
      </div>
    </div>
  );
}
