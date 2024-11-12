import { images } from "../config/images.js"
import Layout from "./Layout.jsx";

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pb-32 md:pb-0"
      style={{
        background: "linear-gradient(45deg, rgba(0, 0, 0, 1), rgba(0, 150, 120, .5)), url(/assets/images/islamic.jpg) no-repeat center center", 
      }}
    >
      <img src={images.line} className="absolute  min-w-[180%] md:min-w-full md:min-h-screen -right-5 md:right-[30%] xl:right-[90%] -z-10" />
      <Layout>

        <div className="grid md:grid-cols-2 gap-10 items-center justify-center md:justify-between mt-[12rem] md:-mt-5">
          <div className="grid gap-4 text-[#ddd]">
            <div className="border-2 border-accent py-2 px-10 rounded-full w-fit">
              <img
                src={images.salam}
                alt="ٱلسَّلَامُ عَلَيْكُمْ"
                className="invert w-[150px] mx-auto"
              />
              {/* <p className='font-uthman'></p> */}
            </div>
            <div className="grid gap-3">
              <h3 className="text-5xl font-semibold text-accent relative"><span className="">Dr.</span> Joynul Abadin Bin Noman</h3>
              <p>Sheikh Dr. Joynul Abadin Bin Noman is an esteemed researcher, educator, Islamic scholar, and author. He is the Director of <span className="text-accent font-semibold">Wahidiya Library</span>, one of the most well-known libraries in Bangladesh. He completed his undergraduate and postgraduate studies at Rajshahi University, where he earned a First-Class First in his DH, BA (Honors), and MA degrees. He holds a <span className="font-bold text-accent">Ph.D</span>. from the University of Rajshahi. Currently serves as a faculty member at the Islamic University of Madinah and specializes in Islamic studies, with a focus on Hadith.</p>
            </div>
          </div>
          <div className="rounded-full relative border-4 border-accent overflow-hidden text-center flex justify-center  w-4/5 mx-auto md:ml-auto md:w-auto">
            <img src='/assets/images/t.png' className="mx-auto" />
            <div className='rotateBorder'></div>
          </div>
        </div>
      </Layout>
    </section>
  );
}

export default HeroSection;
