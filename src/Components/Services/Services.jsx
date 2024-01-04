import { MdPublic } from 'react-icons/md';
import { DiResponsive } from 'react-icons/di';
import { TiCodeOutline } from 'react-icons/ti';

const Services = () => {
  return (
    <div className="py-20 text-slate-100 text-center bg-slate-950">
      <div className="mx-auto max-w-screen-xl">
        <p className="text-teal-400 text-lg">My Service</p>
        <h1 className="text-2xl md:text-5xl font-semibold leading-tight  mt-10 mb-32">
          Crafting stories through <br />
          development and innovation
        </h1>
        <div className="grid grid-cols-1 place-items-center lg:grid-cols-3 mx-auto gap-10">
          {/* 1 */}
          <div className="card w-96 h-80 flex border-[1px] border-gray-700 relative">
            <MdPublic className="text-9xl text-teal-400 absolute bottom-60 left-32" />
            <div className="p-10">
              <h2 className="text-2xl font-semibold my-10">
                Frontend Development
              </h2>
              <p className="mt-2">
                Elevate your web development with our Frontend
                expertise—crafting dynamic and scalable applications seamlessly
                integrating MongoDB, Express.js, React, and TailwindCSS for a
                robust user experience.
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="card w-96 h-80 flex border-[1px] border-gray-700 relative">
            <DiResponsive className="text-[200px] text-teal-400 absolute bottom-56 left-24" />
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
          <div className="card w-96 h-80 flex border-[1px] border-gray-700 relative">
            <TiCodeOutline className="text-9xl text-teal-400 absolute bottom-64 left-32" />
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
