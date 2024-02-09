import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ProjectsCard = ({ project }) => {
  const { img1, title, link } = project || {};
  return (
    <div>
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
