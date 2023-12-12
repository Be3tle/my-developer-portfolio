import { MdPublic } from 'react-icons/md';
import { DiResponsive } from 'react-icons/di';
import { TiCodeOutline } from 'react-icons/ti';

const Services = () => {
  return (
    <div className="py-10 max-w-screen-2xl mx-auto text-slate-100 text-center bg-slate-950">
      <p className="text-teal-400 text-lg">My Service</p>
      <h1 className="text-5xl font-semibold leading-tight  mt-10 mb-40">
        Crafting stories through <br />
        development and innovation
      </h1>
      <div className="flex justify-center items-center space-x-8">
        {/* 1 */}
        <div className="flex border-[1px] border-gray-700 relative">
          <MdPublic className="text-9xl text-teal-400 absolute bottom-52 left-40" />
          <div className="p-10">
            <h2 className="text-2xl font-semibold my-10">Fullstack Development</h2>
            <p className="mt-2">
              Our documentation is as thorough as possible. Each template option
              is detailed and easy to follow.
            </p>
          </div>
        </div>

        {/* 2 */}
        <div className="flex border-[1px] border-gray-700 relative">
          <DiResponsive className="text-[200px] text-teal-400 absolute bottom-44 left-40" />
          <div className="p-10">
            <h2 className="text-2xl font-semibold my-10">Responsive Design</h2>
            <p className="mt-2">
              We offer a dedicated & friendly support, We will try to reply as
              fast as we can. We will be in touch. Good luck!
            </p>
          </div>
        </div>

        {/* 3 */}
        <div className="flex border-[1px] border-gray-700 relative">
          <TiCodeOutline className="text-9xl text-teal-400 absolute bottom-52 left-40" />
          <div className="p-10">
            <h2 className="text-2xl font-semibold my-10">Clean Code</h2>
            <p className="mt-2">
              Watch our video tutorials, step by step instructions to set up the
              Template. We have separated with video tutorials.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
