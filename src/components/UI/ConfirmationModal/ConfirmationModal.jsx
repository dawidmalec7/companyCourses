import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const ConfirmationModal = ({
  title,
  description,
  confirmFunc,
  closeCallback,
  buttonLabel,
}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    closeCallback();
  };

  const handleCloseAfterConfirm = () => {
    confirmFunc();
    setOpen(false);
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        {buttonLabel}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          {description
          && (
          <DialogContentText id="alert-dialog-description">
            {description}
          </DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseAfterConfirm} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

ConfirmationModal.propTypes = {
  title: PropTypes.string,
  confirmFunc: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  description: PropTypes.string,
  closeCallback: PropTypes.func,
}

ConfirmationModal.defaultProps = {
  title: 'Are you sure?',

  description: null,
  closeCallback: () => {},
}

export default ConfirmationModal;
