import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const CourseItem = ({
  course: {
    _id, index, name, isActive, picture,
  },
}) => {
  const useStyles = makeStyles({
    root: {
      minWidth: 275,
      border: isActive ? '1px solid red' : '1px solid black',
      order: index,
    },
    title: {
      fontSize: 14,
    },
    media: {
      minHeight: 200,
    },
  });

  const classes = useStyles();
  return (
    <Card className={classes.root} key={_id}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={picture}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" component={Link} to={`/courses/${index}/edit`}>
          Edit
        </Button>
        <Button size="small" color="primary">
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}

CourseItem.propTypes = {
  course: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    picture: PropTypes.string,
  }).isRequired,
}

export default CourseItem;
