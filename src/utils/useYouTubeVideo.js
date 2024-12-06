import axios from "axios";
import { useEffect, useState } from "react";

const useYouTubeVideo = ({ limit }) => {
    const [videos, setVideos] = useState([]);
    const API_KEY = import.meta.env.VITE_YTAPI;
    const CHANNEL_ID = import.meta.env.VITE_EX_ID;
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchChannelVideos = async () => {
            try {
                const response = await axios.get(
                    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&type=video&order=date&key=${API_KEY}&maxResults=${limit}`
                );
                setVideos(response.data.items);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching channel videos:', error);
            }
        };

        fetchChannelVideos();
    }, [API_KEY, CHANNEL_ID]);

    return { videos, isLoading };
};

export default useYouTubeVideo;
