import { createBrowserRouter } from 'react-router-dom';

import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';

import Projects from '../Components/Projects/Projects';
import Experience from '../Components/Experience/Experience';
import Services from '../Components/Services/Services';
import ContactUs from '../Components/ContactUs/ContactUs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'about-us',
        element: <Experience></Experience>,
      },
      {
        path: 'services',
        element: <Services></Services>,
      },
      {
        path: 'contact-us',
        element: <ContactUs></ContactUs>,
      },
      {
        path: 'projects',
        element: <Projects></Projects>,
      },
    ],
  },
]);
export default router;
