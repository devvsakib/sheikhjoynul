import { useEffect, useState } from 'react';
import VideoCard from '../components/VideoCard';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaLink } from 'react-icons/fa';
import Title from '../components/Title';

function Lectures() {
  const [videos, setVideos] = useState([]);
  const API_KEY = import.meta.env.VITE_YTAPI;
  const CHANNEL_ID = import.meta.env.VITE_EX_ID;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchChannelVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&type=video&order=date&key=${API_KEY}&maxResults=50`
        );
        setVideos(response.data.items);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching channel videos:', error);
      }
    };

    fetchChannelVideos();
  }, [API_KEY, CHANNEL_ID]);

  console.log(videos);

  return (
    <div className="max-w-5xl mx-auto p-4 mt-32 pb-24">
      <Title
        heading={"Lectures"}
        description={"Watch Lectures by Sheikh Dr. Joynul Abadin Bin Noman"}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {
          isLoading ? (
            <p>Loading...</p>
          ) :

            videos.slice(0, 12).map((video) => (
              <VideoCard
                title={video.snippet.title}
                key={video.id.videoId}
                id={video.id.videoId}
                thumbnailUrl={video.snippet.thumbnails.medium.url}
                videoUrl={video.id.videoId}
              />
            ))
        }

        {/* Add more VideoCard components */}
      </div>
      <div className=''>
        <Link
          to="https://www.youtube.com/@Dr.Joynulabadinnomanmadani"
          target="_blank"
          className="w-fit mx-auto mt-5 text-center bg-tertiary text-white py-2 px-4 rounded-md hover:bg-accent transition-all duration-300 ease-in-out flex items-center group"
        >
          <span className='-mr-2 group-hover:mr-0'>
            More Lectures
          </span>
          <FaLink className='ml-0 group-hover:ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out' />
        </Link>
      </div>
    </div>
  );
}

export default Lectures;
