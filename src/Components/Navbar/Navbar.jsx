import { Link } from 'react-router-dom';

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/#experience">About Us</a>
      </li>

      <li>
        <a href="/#services">Services</a>
      </li>
      <li>
        <a href="/#projects">Projects</a>
      </li>

      <li>
        <details>
          <summary>Blog</summary>
          <ul className="p-2">
            <li>
              <a>Blog List</a>
            </li>
            <li>
              <a>Blog Details</a>
            </li>
          </ul>
        </details>
      </li>

      <li>
        <a href="/#contact">Contact</a>
      </li>
    </>
  );

  return (
    <div className="navbar md:fixed z-10 bg-opacity-70 md:bg-opacity-30  bg-black text-white max-w-screen-2xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/">
          <h3 className="font-bold text-xl">
            SH<span className="text-teal-400">O</span>EB
          </h3>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <a
          href="contact-us"
          className="btn bg-teal-400 hover:bg-teal-500 border-0 text-black"
        >
          Hire Me
        </a>
      </div>
    </div>
  );
};

export default Navbar;
