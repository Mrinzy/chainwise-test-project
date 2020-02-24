/*
  A reusable Component Designed to Display Messages to the user to see the state of the Application
*/
/* eslint-disable */
import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/styles';

const styles = makeStyles({
  title: {
    fontFamily: 'proximanova-bold'
  },
  contextTitle: {
    fontFamily: 'proximanova-semibold'
  },
  button: {
    cursor: 'pointer'
  }
});
const DialogBox = props => {
  const classes = styles();
  //Rendering of the Dialog Box
  return (
    <>
      <Dialog open={props.value} onClose={props.closePopup}>
        <DialogTitle className={classes.title}>
          Message
        </DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.contextTitle}>
            {props.res}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            className={classes.button}
            onClick={props.closePopup}
            color="primary"
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DialogBox;
