import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  InputLabel,
  FormControl,
  FilledInput,
  Button,
} from '@material-ui/core';

import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import css from './CourseForm.module.scss';

import Video from './Video/Video';
import Quiz from './Quiz/Quiz';
import CoursePanel from './CoursePanel/CoursePanel';
import TextEditor from './TextEditor/TextEditor';
import PopoverWithButton from '../../UI/PopoverWithButton/PopoverWithButton'

const courseTypes = [
  { type: 'quiz' },
  { type: 'text' },
  { type: 'video' },
]

const courseTypesIcons = {
  text: ViewHeadlineIcon,
  video: VideoLabelIcon,
  quiz: QuestionAnswerIcon,
}

const CourseItemsList = ({ items, removePanel }) => (
  items.map(((item) => {
    let CourseItemComponent = null;
    switch (item) {
      case 'quiz':
        CourseItemComponent = Quiz;
        break;
      case 'text':
        CourseItemComponent = TextEditor;
        break;
      case 'video':
        CourseItemComponent = Video;
        break;
      default:
        return null;
    }
    return (
      <CoursePanel name={item} removePanel={removePanel}>
        <CourseItemComponent />
      </CoursePanel>
    )
  }))
)

const AddCourseItemList = ({ addPanel }) => (
  <List component="nav" aria-label="main mailbox folders">
    {courseTypes.map(({ type }) => {
      const Icon = courseTypesIcons[type];
      return (
        <ListItem button onClick={() => addPanel(type)}>
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
          <ListItemText primary={type} />
        </ListItem>
      )
    })}
  </List>
)

AddCourseItemList.propTypes = {
  addPanel: PropTypes.func.isRequired,
}

const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  courseItemButton: {
    margin: `${theme.spacing(2)}px 0`,
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const CourseForm = () => {
  const { register, handleSubmit } = useForm();
  const [courseItems, setCourseItems] = React.useState([]);
  const classes = useStyles();

  const addCourseItems = (courseType) => {
    setCourseItems([...courseItems, courseType]);
  }
  const removeCourseItem = (courseType) => {
    const courseItemsFiltered = courseItems.filter((item) => courseType !== item);
    setCourseItems(courseItemsFiltered);
  }

  return (
    <div>
      <form>
        <Container maxWidth="lg">
          <FormControl fullWidth className={classes.margin} variant="filled">
            <InputLabel htmlFor="filled-adornment-amount">Course Name</InputLabel>
            <FilledInput
              id="filled-adornment-amount"
              value="test"
            />
          </FormControl>
          <CourseItemsList items={courseItems} removePanel={removeCourseItem} />
          <PopoverWithButton buttonText="Add Course Item">
            <AddCourseItemList addPanel={addCourseItems} />
          </PopoverWithButton>
          {/* Upload image for course
          <Button
            variant="contained"
            component="label"
          >
            Upload File
            <input
              type="file"
              style={{ display: 'none' }}
            />
          </Button> */}
        </Container>
      </form>
    </div>
  );
}

CourseForm.propTypes = {};

export default connect(() => {})(CourseForm);
