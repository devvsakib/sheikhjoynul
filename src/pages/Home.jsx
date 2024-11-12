import HeroSection from '../components/HeroSection';

function Home() {
  return (
    <>
      <HeroSection />
      <section className='min-h-screen relative'
      // style={{
      //   background: "linear-gradient(180deg, rgba(0, 0, 0, 1), rgba(0, 150, 120, .5))",
      // }}
      >

        <div className="absolute -top-8 md:-top-10 left-1/2 transform -translate-x-1/2 flex items-center gap-5 bg-[#009678] text-white rounded-full p-5 px-10 transition-all">
          <button className='hover:tracking-wider transition-all duration-150 ease-linear'>Contact</button>
          <span className='h-6 border w-auto bg-white'></span>
          <button className='hover:tracking-wider transition-all duration-150 ease-linear hover:text-secondary'>Biography</button>
        </div>
      </section>
    </>
  );
}

export default Home;
