import ContactUs from '../../Components/ContactUs/ContactUs';
import Experience from '../../Components/Experience/Experience';
import Header from '../../Components/Header/Header';
import Projects from '../../Components/Projects/Projects';
import Services from '../../Components/Services/Services';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <Experience></Experience>
      <Projects></Projects>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
