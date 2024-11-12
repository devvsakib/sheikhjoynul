function VideoCard({ title, videoUrl }) {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        <iframe className="w-full h-48" src={videoUrl} title={title} frameBorder="0" allowFullScreen></iframe>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </div>
    );
  }
  
  export default VideoCard;
  