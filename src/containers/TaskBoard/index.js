import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./style";
import { Button} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
//import Paper from "@material-ui/core/Paper";
import { STATUSES } from "../../constants";
import TaskList from "../../components/TaskList/index";

import TaskForm from "../../components/TaskForm";

const listTask = [
  {
    id: 1,
    title: "Read book",
    description: "sjndsjand",
    status: 0,
  },
  {
    id: 2,
    title: "Read book",
    description: "dsfsdf",
    status: 1,
  },
  {
    id: 3,
    title: "Read book",
    description: "wsfwfew",
    status: 2,
  },
];

class TaskBoard extends Component {
  state = {
    open: false
  }

  handleClose = () => {
    this.setState({
      open: false
    });
  }

  openForm = () => {
    this.setState({
      open: true
    })
  }

  renderBoard = () => {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status) => {
          const taskFilter = listTask.filter(
            (task) => task.status === status.value
          );
          return <TaskList tasks={taskFilter} status={status} key={status.value} />;
        })}
      </Grid>
    );
    return xhtml;
  };

  renderForm = () => {
    const {open}= this.state;
    var xhtml = null;
    xhtml = (
      <TaskForm open={open} onClose={this.handleClose}/>
    )
    return xhtml;
  }

  render() {
    var { classes } = this.props;

    return (
      <div>
        <Button variant="contained" color="primary" className={classes.Button} onClick={this.openForm}>
          <AddIcon />
          Thêm mới công việc
        </Button>
        {this.renderForm()}
        {this.renderBoard()}
      </div>
    );
  }
}

export default withStyles(styles)(TaskBoard);
