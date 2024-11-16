import { Link } from "react-router-dom";

function VideoCard({ title, videoUrl, thumbnailUrl }) {

  return (
    <Link
      to={`https://www.youtube.com/watch?v=${videoUrl}`}
      target="_blank"
      className="bg-tertiary border-2 border-tertiary rounded-lg overflow-hidden shadow-lg">
      <img src={thumbnailUrl} className="w-full"/>
      <div className="p-4">
        <h3 className="text-md font-semibold">{title}</h3>
      </div>
    </Link>
  );
}

export default VideoCard;
