const Header = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-black text-white">
        <div className="hero-content flex-col lg:flex-row-reverse gap-56">
          <img
            src="../../../public/assets/1702298976011.png"
            className="max-w-sm rounded-full shadow-xl border-teal-400 border-2"
          />
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold leading-snug">
              HI, THIS IS SHOEB
              <br />
              WEB <span className="text-teal-400">DEVELOPER</span>
            </h1>
            <p className="py-9 text-neutral-300">
              MERN stack enthusiast on a mission to level up from coding to
              leadership. I specialize in building web applications and am
              determined to become a tech lead. Passionate about turning
              creative concepts into functional code, I am always up for
              collaborative projects and eager to lead dynamic teams in creating
              meaningful software solutions.
            </p>
            <button className="btn bg-teal-400 hover:bg-teal-500 border-0 text-black rounded-none">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
