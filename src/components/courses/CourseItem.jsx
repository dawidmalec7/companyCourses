import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import SmallButton from '../UI/Buttons/SmallButton/SmallButton';
import ConfirmationModal from '../UI/ConfirmationModal/ConfirmationModal';

const CourseItem = ({course: {id, type, attributes}}) => {

      const useStyles = makeStyles({
        root: {
          minWidth: 275,
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
    <Card className={classes.root} key={id}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography>
            {type}
          </Typography>
          <Typography>
            Created: {`${attributes.created_at.substr(0,10)} at ${attributes.created_at.substr(12, 7)}`}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {id}.{attributes.name}
          </Typography>
          <Typography>
            {attributes.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ConfirmationModal description={`${name} course will be permanently deleted.`} buttonLabel="Remove" confirmFunc={() => {}} />
      </CardActions>
    </Card>
  );
}

export default CourseItem;



//!!!!!!!POPRZEDNIA WERSJA!!!!!!!!!!!//


//   course: {
//     _id, index, name, isActive, picture,
//   },
// }) => {
//   const useStyles = makeStyles({
//     root: {
//       minWidth: 275,
//       border: isActive ? '1px solid red' : '1px solid black',
//       order: index,
//     },
//     title: {
//       fontSize: 14,
//     },
//     media: {
//       minHeight: 200,
//     },
//   });

//   const classes = useStyles();
//   return (
//     <Card className={classes.root} key={_id}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image={picture}
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             {name}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <SmallButton color="primary" component={Link} to={`/courses/${index}/edit`}>
//           Edit
//         </SmallButton>
//         <ConfirmationModal description={`${name} course will be permanently deleted.`} buttonLabel="Remove" confirmFunc={() => {}} />
//       </CardActions>
//     </Card>
//   );
// }

// CourseItem.propTypes = {
//   course: PropTypes.shape({
//     _id: PropTypes.string.isRequired,
//     index: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     isActive: PropTypes.bool.isRequired,
//     picture: PropTypes.string,
//   }).isRequired,
// }