import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import SmallButton from '../../UI/Buttons/SmallButton/SmallButton';
import ConfirmationModal from '../../UI/ConfirmationModal/ConfirmationModal';

import { deleteCourse } from '../../../actions/courses';
import { convertFromHTML } from 'draft-js';

const CourseItem = ({removeCourse, course: {id, type, attributes}, courses: {data = [], error }}) => {

      const useStyles = makeStyles({
        root: {
          minWidth: 275,
          margin: 10,
          boxShadow: `10px 10px 5px 0px rgba(0,0,0,0.75)`,
          transition: '2s',
        },
        title: {
          fontSize: 14,
        },
        media: {
          minHeight: 200,
          background: `url(${'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'})`,
          backgroundSize: `cover`,
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
            {id}
          </Typography>
          <Typography>
            {type}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {attributes.name}
          </Typography>
          <Typography>
            {attributes.description}
          </Typography>
          <Typography>
            <Rating name="half-rating" defaultValue={5} precision={0.5} />
          </Typography>
          <Typography>
            Created: {`${attributes.created_at.substr(0,10)} at ${attributes.created_at.substr(12, 7)}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <SmallButton color="primary" component={Link} to={`/courses/${id}/edit`}>
           Edit
        </SmallButton>
        <ConfirmationModal description={`${attributes.name} course will be permanently deleted.`} buttonLabel="Remove" confirmFunc={() => (removeCourse(93, id))} />
      </CardActions>
    </Card>
  );
}

const mapStateToProps = (state) => ({ courses: state.groups });
const mapDispatchToProps = (dispatch) => ({
  removeCourse: (groupId, courseId) => dispatch(deleteCourse(groupId, courseId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(
  CourseItem,
);



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