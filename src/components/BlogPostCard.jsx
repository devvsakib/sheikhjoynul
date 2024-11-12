import { Link } from 'react-router-dom';

function BlogPostCard({ id, title, excerpt, date }) {
  return (
    <div className="bg-white shadow-lg rounded p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm">{date}</p>
      <p className="mt-2 text-gray-700">{excerpt}</p>
      <Link to={`/blog/${id}`} className="text-blue-500 mt-4 block">
        Read More
      </Link>
    </div>
  );
}

export default BlogPostCard;
