import Header from '../../Components/Header/Header';
import Projects from '../../Components/Projects/Projects';
import ContactUs from '../../ContactUs/ContactUs';
import Experience from '../../Experience/Experience';
import Services from '../../Services/Services';

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
