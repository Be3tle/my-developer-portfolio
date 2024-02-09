import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ProjectsCard = ({ project }) => {
  const { img1, title, link } = project || {};
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);
  return (
    <div data-aos="zoom-in">
      <Link to={link} state={title} target="_blank">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={img1}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
      </Link>
    </div>
  );
};

export default ProjectsCard;
