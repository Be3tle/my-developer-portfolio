import { MdPublic } from 'react-icons/md';
import { DiResponsive } from 'react-icons/di';
import { TiCodeOutline } from 'react-icons/ti';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Services = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);
  return (
    <div id="services" className="py-20 text-slate-100 text-center bg-black">
      <div className="mx-auto max-w-screen-xl">
        <p className="text-teal-400 text-lg">My Service</p>
        <h1 className="text-2xl md:text-5xl font-semibold leading-tight  mt-10 mb-32">
          Crafting stories through <br />
          development and innovation
        </h1>
        <div className="grid grid-cols-1 place-items-center lg:grid-cols-3 mx-auto gap-16 lg:gap-10">
          {/* 1 */}
          <div
            data-aos="zoom-in"
            className="card w-80 lg:w-96 lg:h-80 flex border-[1px] border-gray-700 relative"
          >
            <MdPublic className="text-9xl text-teal-400 absolute bottom-80 left-24 lg:bottom-60 lg:left-32" />
            <div className="p-10">
              <h2 className="text-2xl font-semibold my-10">
                Frontend Development
              </h2>
              <p className="mt-2">
                Elevate your web development with our Frontend
                expertise—crafting dynamic and scalable applications seamlessly
                integrating MongoDB, Express.js, React.js, and Node.js for a
                robust user experience.
              </p>
            </div>
          </div>

          {/* 2 */}
          <div
            data-aos="zoom-in"
            className="card w-80 lg:w-96 lg:h-80 flex border-[1px] border-gray-700 relative"
          >
            <DiResponsive className="text-[200px] text-teal-400 absolute bottom-60 left-16 lg:bottom-56 lg:left-24" />
            <div className="p-10">
              <h2 className="text-2xl font-semibold my-10">
                Responsive Design
              </h2>
              <p className="mt-2">
                Crafting seamless and visually stunning websites with a focus on
                responsiveness using a blend of Tailwind CSS and raw CSS
                expertise for an optimal user experience across all devices.
              </p>
            </div>
          </div>

          {/* 3 */}
          <div
            data-aos="zoom-in"
            className="card w-80 lg:w-96 lg:h-80 flex border-[1px] border-gray-700 relative"
          >
            <TiCodeOutline className="text-9xl text-teal-400 absolute bottom-[301px] left-24 lg:bottom-64 lg:left-32" />
            <div className="p-10">
              <h2 className="text-2xl font-semibold my-10">Clean Code</h2>
              <p className="mt-2">
                Transform your software with our Clean Code service, enhancing
                readability and maintainability for optimal performance and
                longevity. Elevate your codebase with industry best practices
                for efficiency and collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
