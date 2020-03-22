import { Link } from 'react-router-dom';
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';

const ListItemLink = ({ icon, primary, to }) => (
  <li>
    <ListItem button component={(props) => <Link to={to} {...props} />}>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      <ListItemText primary={primary} />
    </ListItem>
  </li>
);

ListItemLink.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.bool]),
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

ListItemLink.defaultProps = {
  icon: false,
}

export default ListItemLink;
