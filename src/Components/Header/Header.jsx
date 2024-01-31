const Header = () => {
  const handleDownload = () => {
    const pdfUrl = 'assets/Resume - Abu Ratin Shoeb.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'document.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="header" className="hero min-h-screen bg-base-300 text-white">
      <div className="hero-content flex-col lg:flex-row-reverse  gap-20 lg:gap-56">
        <img
          src="assets/1702298976011.png"
          className="max-w-xs lg:max-w-sm md:mt-20 lg:mt-0 rounded-full shadow-xl border-teal-400 border-2"
        />
        <div className="max-w-2xl">
          <h1 className="text-2xl md:text-5xl font-bold leading-snug">
            HI, THIS IS SHOEB
            <br />
            WEB <span className="text-teal-400">DEVELOPER</span>
          </h1>
          <p className="py-9 text-neutral-300 text-justify">
            MERN stack enthusiast on a mission to level up from coding to
            leadership. I specialize in building web applications and am
            determined to level up. Passionate about turning creative concepts
            into functional code, I am always up for collaborative projects and
            eager to lead dynamic teams in creating meaningful software
            solutions.
          </p>
          <button
            onClick={handleDownload}
            className="btn bg-teal-400 hover:bg-teal-500 border- text-black "
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
