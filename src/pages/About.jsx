import { images } from "../config/images";

function About() {
  return (
    <div className="max-w-5xl mx-auto p-4 mt-28 pt-10">
      <div className="grid gap-3  text-justify">
        <h3 className="text-5xl font-semibold text-center text-tertiary brightness-150 relative"><span className="">Dr.</span> Joynul Abadin Bin Noman</h3>
        <img src={images.sheikh1} className="mx-auto rounded-md"/>
        <p className="text-lg">Sheikh Dr. Joynul Abadin Bin Noman is an esteemed researcher, educator, Islamic scholar, and author. He is the Director of <span className="specialText">Wahidiya Library</span>, one of the most well-known libraries in Bangladesh. He completed his undergraduate and postgraduate studies at Rajshahi University, where he earned a First-Class First in his DH, BA (Honors), and MA degrees. He holds a <span className="specialText">Ph.D</span>. from the University of Rajshahi. Currently serves as a faculty member at the Islamic University of Madinah and specializes in Islamic studies, with a focus on Hadith.</p>
      </div>
      {/* More sections here */}
    </div>
  );
}

export default About;
