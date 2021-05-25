import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Grid,
} from '@material-ui/core';
import { addCourse } from '../../../actions/courses';
import css from './Course.module.scss';
import SmallButton from '../../UI/Buttons/SmallButton/SmallButton';

const data = [
  {
    id: '1',
    type: 'section',
    attributes: {
      name: 'quizowanieeeeeee',
      description: 'javascript quiz',
      video_url: null,
      type: 'quiz',
      comments: null,
      questions: null,
    },
  },
  {
    id: '2',
    type: 'section',
    attributes: {
      name: 'Elo text',
      description: 'javascript quiz',
      video_url: null,
      type: 'text',
      comments: null,
      questions: null,
    },
  },
  {
    id: '2',
    type: 'section',
    attributes: {
      name: 'Elo Video',
      description: 'javascript quiz',
      video_url: null,
      type: 'video',
      comments: null,
      questions: null,
    },
  },
];

const Course = ({ match }) => (
  <>
    <Container maxWidth="lg" className={css.Container}>
      {data.map((t) => (
        <Grid item className={css.GridItem}>
          <Typography variant="h6">{t.attributes.name}</Typography>
          <Typography variant="body1">{t.attributes.description}</Typography>
          {
            t.attributes.type === 'quiz'
            && (<SmallButton component={Link} to={`/course/${match.params.courseId}/quiz/${t.id}`}>Start Quiz</SmallButton>)
          }
        </Grid>
      ))}
    </Container>
  </>
)

const mapStateToProps = (state) => ({ courses: state.courses }, { groups: state.groups });
const mapDispatchToProps = (dispatch) => ({
  getGroups: () => dispatch(fetchGroups()),
  addSingleCourse: (id, data) => dispatch(addCourse(id, data)),
})

Course.propTypes = {
  groups: PropTypes.object.isRequired,
  getGroups: PropTypes.func.isRequired,
  courses: PropTypes.object.isRequired,
  addSingleCourse: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(
  Course,
);
