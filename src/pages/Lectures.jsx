import VideoCard from '../components/VideoCard';

function Lectures() {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Lectures</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <VideoCard title="Understanding the Quran" videoUrl="https://www.youtube.com/embed/xyz" />
        {/* Add more VideoCard components */}
      </div>
    </div>
  );
}

export default Lectures;
