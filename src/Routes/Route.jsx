import { createBrowserRouter } from 'react-router-dom';

import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Experience from '../Experience/Experience';
import Services from '../Services/Services';
import ContactUs from '../ContactUs/ContactUs';
import Projects from '../Components/Projects/Projects';

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
