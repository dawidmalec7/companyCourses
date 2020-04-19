import React from 'react';
import PropTypes from 'prop-types';
import {
  IconButton,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// className = { classes.flexCenter } >

const useStyles = makeStyles(() => ({
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const CoursePanel = ({
  children, name, removePanel,
}) => {
  const classes = useStyles();
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <div className={classes.flexCenter}>
          <IconButton component="span" onClick={() => removePanel(name)}>
            <CloseIcon />
          </IconButton>
          <Typography>{name}</Typography>
        </div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        {children}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}
CoursePanel.propTypes = {
  children: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  removePanel: PropTypes.func.isRequired,
}

export default CoursePanel;
