import { createBrowserRouter } from 'react-router-dom';

import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';

import Projects from '../Components/Projects/Projects';
import Experience from '../Components/Experience/Experience';
import Services from '../Components/Services/Services';
import ContactUs from '../Components/ContactUs/ContactUs';
import Details from '../Components/Projects/Details/Details';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
    ],
  },
]);
export default router;
