import BlogPostCard from '../components/BlogPostCard';

function Blog() {
  const posts = [
    { id: 1, title: "Understanding Tawheed", excerpt: "An exploration of the concept of Tawheed...", date: "2024-11-01" },
    { id: 2, title: "Spiritual Success", excerpt: "How to achieve success through faith...", date: "2024-10-20" },
    // Add more blog posts here
  ];

  return (
    <div className="max-w-5xl mx-auto p-4 mt-28">
      <h2 className="text-3xl font-bold mb-4">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map(post => (
          <BlogPostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}

export default Blog;
