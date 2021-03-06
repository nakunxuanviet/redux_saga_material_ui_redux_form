import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./style";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import TaskItem from "../TaskItem";

class TaskList extends Component {
  render() {
    const { classes, tasks, status } = this.props;
    return (
      <Grid item md={4} key={status.value}>
        <Box mt={1} mb={2}>
          <div className={classes.status}>{status.label}</div>
        </Box>
        <div className={classes.wrapperListTask}>
          {tasks.map((task) => {
            {/* const {title, description} = task; */}
            return <TaskItem task={task} status={status} key={task.id} />;
          })}
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles)(TaskList);
