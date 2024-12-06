import { FaLink, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import HeroSection from '../components/HeroSection';
import Layout from '../components/Layout';
import VideoCard from '../components/VideoCard';
import { Link } from 'react-router-dom';
import Title from '../components/Title';
import useYouTubeVideo from '../utils/useYouTubeVideo';
import { books } from './Books';
import BookCard from '../components/BookCard';

function Home() {
  const { videos, isLoading } = useYouTubeVideo({
    limit: 6
  });

  return (
    <>
      <HeroSection />
      <section className='min-h-screen relative px-5'
        style={{
          background: "url(/assets/images/grad-light.png) no-repeat center center",
          backgroundSize: "cover",
        }}
      >
        {/* contact and biography */}
        <div className="absolute -top-8 md:-top-8 left-1/2 transform -translate-x-1/2 flex items-center gap-5 bg-[#009678] text-white rounded-full p-5 px-10 transition-all">
          <button className='hover:tracking-wider transition-all duration-150 ease-linear'>Contact</button>
          <span className='h-6 border w-auto bg-white'></span>
          <button className='hover:tracking-wider transition-all duration-150 ease-linear hover:text-secondary'>Biography</button>
        </div>
        <div className='text-white text-center grid items-center !min-h-screen relative  pb-24 md:py-0'>
          <FaQuoteLeft className='absolute top-[5rem] md:top-[10rem] rotate-20 left-[10rem] transform -translate-x-1/2 -translate-y-1/2 text-3xl md:text-[10rem] text-[#009678]/40' />
          <FaQuoteRight className='absolute bottom-[0rem] -rotate-20 right-[9rem] md:right-[10rem] transform -translate-x-1/2 -translate-y-1/2 text-3xl md:text-[10rem] text-primary/40' />

          <div className='grid gap-10 sm:gap-20  lg:gap-12 mt-44 sm:mt-20 lg:mt-8'>
            <pre
              className='font-thuluth font-bold text-5xl text-[#009678] brightness-200 tracking-wide'
            >نُّورٌ عَلَىٰ نُورٍۢ  ۗ  يَهْدِى ٱللَّهُ لِنُورِهِۦ مَن يَشَآءُ</pre>
            <h4 className='text-4xl sm:text-5xl font-bold bg-black bg-clip-text text-transparent py-2'>Light upon Light! <br /> Allah guides whoever He wills to His light.</h4>
            <span className='absolute text-2xl text-[#009678] bottom-20 sm:bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>24:35</span>
          </div>
        </div>
      </section>
      <section className='min-h-screen grid place-content-center py-20 my-32 md:py-0'>
        <Layout>
          <Title
            heading={"Videos"}
            description={"Tawheed Series"}
          />
          {
            isLoading ? <p>Loading...</p> :
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {videos?.map((video) => (
                  <VideoCard
                    title={video.snippet.title}
                    key={video.id.videoId}
                    id={video.id.videoId}
                    thumbnailUrl={video.snippet.thumbnails.medium.url}
                    videoUrl={video.id.videoId}
                  />
                ))}
              </div>}
          <Link
            to="/lectures"
            className="w-fit mx-auto mt-10 text-center bg-tertiary text-white py-2 px-4 rounded-md hover:bg-accent transition-all duration-300 ease-in-out flex items-center group"
          >
            <span className='-mr-2 group-hover:mr-0'>
              See More
            </span>
            <FaLink className='ml-0 group-hover:ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out' />
          </Link>
        </Layout>
      </section>
      <section className='min-h-screen grid place-content-center py-20 my-32 md:py-0'>
        <Layout>
          <Title
            heading={"Books"}
            description={"Books written/Translated by Sheikh Dr. Joynul Abadin Bin Noman"}
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {books?.slice(0, 8).map((book) => (
              <BookCard
                key={book.id} {...book}
              />
            ))}
          </div>
          <Link
            to="/books"
            className="w-fit mx-auto mt-10 text-center bg-tertiary text-white py-2 px-4 rounded-md hover:bg-accent transition-all duration-300 ease-in-out flex items-center group"
          >
            <span className='-mr-2 group-hover:mr-0'>
              See More
            </span>
            <FaLink className='ml-0 group-hover:ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out' />
          </Link>
        </Layout>
      </section>
    </>
  );
}

export default Home;
