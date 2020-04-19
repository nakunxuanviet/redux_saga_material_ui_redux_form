import React, { Component } from "react";
import styles from "./style";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button, withStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

class TaskForm extends Component {
  render() {
    const { open, classes, onClose } = this.props;
    return (
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Thêm mới công việc</DialogTitle>
        <DialogContent>
          <TextField
            id="standard-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            className={classes.TextField}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="standard-multiline-flexible"
            label="Multiline"
            multiline
            className={classes.TextField}
            rowsMax={4}
            // value={value}
            // onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(TaskForm);
