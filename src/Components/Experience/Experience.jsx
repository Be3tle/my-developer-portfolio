import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Experience = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);
  return (
    <div
      id="experience"
      className="py-20 max-w-screen-2xl mx-auto text-slate-100 text-center bg-base-200"
    >
      <p className="text-teal-400 text-lg">Education & Skills</p>
      <h1 className="text-2xl md:text-5xl font-semibold leading-tight  mt-10 mb-20">
        Years of Experience
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* 1 */}
        <div data-aos="fade-right" className="hero">
          <div className="hero-content text-left">
            <div className="max-w-xl">
              <button className="btn border-[1px] mb-3 border-teal-400">
                2023 - Present
              </button>
              <h1 className="text-2xl md:text-5xl font-bold">
                MERN Stack Developer
              </h1>
              <p className="py-6">
                {`I have gained hands-on experience with ReactJS, showcasing my commitment to frontend development. I've independently completed projects highlighting proficiency in React.js for UI and using Node.js, MongoDB, and Express.js for API integration, establishing a strong foundation for future contributions.`}
              </p>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div data-aos="fade-left" className="hero">
          <div className="hero-content text-left">
            <div className="max-w-xl">
              <button className="btn border-[1px] mb-3 border-teal-400">
                2022 - 2023
              </button>
              <h1 className="text-2xl md:text-5xl font-bold">
                WordPress Developer
              </h1>
              <p className="py-6">
                {
                  "As a seasoned WordPress freelancer with 2 years of expertise, I've consistently crafted dynamic and visually stunning websites. My focus on delivering tailored solutions ensures a seamless blend of creativity with functionality for a diverse range of clients, showcasing my commitment to excellence in every project."
                }
              </p>
            </div>
          </div>
        </div>

        {/* 3 */}
        <div data-aos="fade-right" className="hero">
          <div className="hero-content text-left">
            <div className="max-w-xl">
              <button className="btn border-[1px] mb-3 border-teal-400">
                2019 - Present
              </button>
              <h1 className="text-2xl md:text-5xl font-bold">
                University of Dhaka
              </h1>
              <p className="py-6">
                {
                  "Pursuing a Bachelor's in English, diving into the world of literature and language to sharpen critical thinking and communication skills."
                }
              </p>
            </div>
          </div>
        </div>

        {/* 4 */}
        {/* <div className="hero">
            <div className="hero-content text-left">
              <div className="max-w-xl">
                <button className="btn border-[1px] mb-3 border-teal-400">
                  2016 - 2018
                </button>
                <h1 className="text-2xl md:text-5xl font-bold">
                  Sagardi Islamia Kamil Madrasah
                </h1>
                <p className="py-6">
                  Had the chance to complete HSC in Humanities with a great
                  exposure to ICT.
                </p>
              </div>
            </div>
          </div> */}
      </div>

      {/* ------------- */}

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 mx-20 pt-20">
        <div className="bg-slate-950 text-left py-2 my-4 rounded">
          <p className="pl-10">HTML</p>
          <progress
            className="progress progress-success"
            value="90"
            max="100"
          ></progress>
        </div>
        <div
          data-aos="fade-left"
          className="bg-slate-950 text-left py-2 my-4 rounded"
        >
          <p className="pl-10">Tailwind CSS</p>
          <progress
            className="progress progress-success"
            value="90"
            max="100"
          ></progress>
        </div>
        <div className="bg-slate-950 text-left py-2 my-4 rounded">
          <p className="pl-10">JavaScript</p>
          <progress
            className="progress progress-success"
            value="80"
            max="100"
          ></progress>
        </div>
        <div
          data-aos="fade-left"
          className="bg-slate-950 text-left py-2 my-4 rounded"
        >
          <p className="pl-10">ReactJS</p>
          <progress
            className="progress progress-success"
            value="80"
            max="100"
          ></progress>
        </div>
        <div className="bg-slate-950 text-left py-2 my-4 rounded">
          <p className="pl-10">ExpressJS</p>
          <progress
            className="progress progress-success"
            value="70"
            max="100"
          ></progress>
        </div>
        <div className="bg-slate-950 text-left py-2 my-4 rounded">
          <p className="pl-10">MongoDB</p>
          <progress
            className="progress progress-success"
            value="80"
            max="100"
          ></progress>
        </div>
      </div>
    </div>
  );
};

export default Experience;
