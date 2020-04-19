import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form'

import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Popover from '@material-ui/core/Popover';

import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import { Editor } from 'react-draft-wysiwyg';
import { signInAction } from '../../../actions/auth';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';
import css from './CourseForm.module.scss';

import Quiz from './Quiz/Quiz';

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

const TextEditor = () => (
  <Editor
    toolbarClassName="toolbarClassName"
    wrapperClassName="wrapperClassName"
    editorClassName={css.editor}
  />
)
const CourseForm = () => {
  const { register, handleSubmit } = useForm();
  const [courseItems, setCourseItems] = React.useState([]);

  // Todo: Przenieść do osobnego komponentu PopOver
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  // ENDTODO

  const addCourseItems = (courseType) => {
    setCourseItems([...courseItems, courseType]);
  }
  const removeCourseItem = (courseType) => {
    const courseItemsFiltered = courseItems.filter((item) => courseType !== item);
    setCourseItems(courseItemsFiltered);
  }
  console.log(courseItems);
  return (
    <div>
      <form>
        <Container maxWidth="lg">
          <div>
            <TextField
              inputRef={register}
              label="Course Name"
              name="course_name"
            />
          </div>
          {/* Courses Items */}
          <div className="course-items">
            {courseItems.map(((item) => {
              let CourseItemComponent = null;
              switch (item) {
                case 'quiz':
                  CourseItemComponent = Quiz;
                  break;
                case 'text':
                  CourseItemComponent = TextEditor;
                  break;
                case 'video':
                  CourseItemComponent = TextEditor;
                  break;
                default:
                  return null;
              }
              return (
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{item}</Typography>
                    <IconButton component="span" onClick={() => removeCourseItem(item)}>
                      <CloseIcon />
                    </IconButton>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <CourseItemComponent />
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              )
            }))}
          </div>
          <div>
            <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
              Add Course Item
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <List component="nav" aria-label="main mailbox folders">
                {courseTypes.map(({ type }) => {
                  const Icon = courseTypesIcons[type];
                  return (
                    <ListItem button onClick={() => addCourseItems(type)}>
                      <ListItemIcon>
                        <Icon />
                      </ListItemIcon>
                      <ListItemText primary={type} />
                    </ListItem>
                  )
                })}
              </List>
            </Popover>
          </div>
          <Button variant="contained" color="primary">
            Save
          </Button>
        </Container>
      </form>
    </div>
  );
}

CourseForm.propTypes = {};

export default connect(() => {})(CourseForm);
