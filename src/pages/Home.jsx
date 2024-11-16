import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import HeroSection from '../components/HeroSection';
import Layout from '../components/Layout';
import VideoCard from '../components/VideoCard';
import { Link } from 'react-router-dom';
import Title from '../components/Title';

function Home() {
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
        <div className='text-white text-center grid items-center !min-h-screen relative'>
          <FaQuoteLeft className='absolute top-[5rem] md:top-[10rem] rotate-20 left-[10rem] transform -translate-x-1/2 -translate-y-1/2 text-3xl md:text-[10rem] text-[#009678]/40' />
          <FaQuoteRight className='absolute bottom-[0rem] -rotate-20 right-[10rem] transform -translate-x-1/2 -translate-y-1/2 text-3xl md:text-[10rem] text-primary/40' />
          <div className='grid gap-10 sm:gap-20  lg:gap-12 mt-44 sm:mt-20 lg:mt-8'>
            <p
              className='font-uthman font-bold text-5xl text-[#009678] brightness-200'
            >نُّورٌ عَلَىٰ نُورٍۢ ۗ يَهْدِى ٱللَّهُ لِنُورِهِۦ مَن يَشَآءُ</p>
            <h4 className='text-5xl font-bold bg-black bg-clip-text text-transparent py-2'>Light upon Light! <br /> Allah guides whoever He wills to His light.</h4>
            <span className='absolute text-2xl text-[#009678] bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>24:35</span>
          </div>
        </div>
      </section>
      <section className='min-h-screen grid place-content-center'>
        <Layout>
          <Title
            heading={"Videos"}
            description={"Tawheed Series"}
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            <VideoCard
              title={"এসো সহজে তাওহীদ শিখি | ১ম পর্ব | তাওহীদের পরিচয় ও প্রকার"}
              thumbnailUrl={"https://i.ytimg.com/vi/hOFB2J6goK8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDnr1p-RdLGGzidDmLXwfLgAOIHtg"} videoUrl="hOFB2J6goK8" />
            <VideoCard
              title={"এসো সহজে তাওহীদ শিখি | ধারাবাহিক ২য় পর্ব | তাওহীদের গুরুত্ব ও শিক্ষা"}
              thumbnailUrl={"https://i.ytimg.com/vi/Ea-bP7NU370/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLABUGDyeEnqul0wNXsMnPxOSphTaQ"} videoUrl="Ea-bP7NU370" />
            <VideoCard
              title={"এসো সহজে তাওহীদ শিখি | ৩য় পর্বের ২য় অংশ | কালিমার শর্তগুলোর ব্যাখ্যা"}
              thumbnailUrl={"https://i.ytimg.com/vi/hOFB2J6goK8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDnr1p-RdLGGzidDmLXwfLgAOIHtg"} videoUrl="jkuriEQYUnA" />
          </div>
          <Link to="/lectures" className='text-center mx-auto block mt-10'>See More</Link>
        </Layout>
      </section>
    </>
  );
}

export default Home;
