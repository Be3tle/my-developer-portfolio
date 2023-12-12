const Experience = () => {
  return (
    <div>
      <div className="py-10 max-w-screen-2xl mx-auto text-slate-100 text-center bg-base-200">
        <p className="text-teal-400 text-lg">Education & Skills</p>
        <h1 className="text-5xl font-semibold leading-tight  mt-10 mb-32">
          Years of Experience
        </h1>
        <div className="grid grid-cols-2 space-x-8">
          {/* 1 */}
          <div className="hero">
            <div className="hero-content text-left">
              <div className="max-w-xl">
                <button className="btn border-[1px] mb-3 border-teal-400">
                  2023 - Present
                </button>
                <h1 className="text-5xl font-bold">MERN Stack Developer</h1>
                <p className="py-6">
                  {
                    "As a beginner, I've hands-on experience with the MERN stack, showcasing my dedication to mastering full-stack development. I've independently built projects that highlight my proficiency in MongoDB, Express.js, React, and Node.js, laying the foundation for future professional contributions."
                  }
                </p>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="hero">
            <div className="hero-content text-left">
              <div className="max-w-xl">
                <button className="btn border-[1px] mb-3 border-teal-400">
                  2021 - 2023
                </button>
                <h1 className="text-5xl font-bold">WordPress Developer</h1>
                <p className="py-6">
                  {
                    "As a seasoned WordPress freelancer with 2 years of expertise, I've crafted dynamic and visually stunning websites, delivering tailored solutions that blend creativity with functionality for a diverse range of clients."
                  }
                </p>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="hero">
            <div className="hero-content text-left">
              <div className="max-w-xl">
                <button className="btn border-[1px] mb-3 border-teal-400">
                  2019 - Present
                </button>
                <h1 className="text-5xl font-bold">University of Dhaka</h1>
                <p className="py-6">
                  {
                    "Pursuing a Bachelor's in English, diving into the world of literature and language to sharpen critical thinking and communication skills."
                  }
                </p>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className="hero">
            <div className="hero-content text-left">
              <div className="max-w-xl">
                <button className="btn border-[1px] mb-3 border-teal-400">
                  2016 - 2018
                </button>
                <h1 className="text-5xl font-bold">
                  Sagardi Islamia Kamil Madrasah
                </h1>
                <p className="py-6">Completed HSC in Humanities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
