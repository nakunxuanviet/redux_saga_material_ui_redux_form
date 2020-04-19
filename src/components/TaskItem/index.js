import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./style";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Card, Icon } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";

class TaskItem extends Component {
  render() {
    const { classes, task, status } = this.props;
    return (
      <Card className={classes.card} key={task.id}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography component="h2">{task.title}</Typography>
            </Grid>
            <Grid item md={4}>
              <Typography component="h2">{status.label}</Typography>
            </Grid>
          </Grid>
          <p>{task.description}</p>
        </CardContent>
        <CardActions className={classes.cardAction}>
          <Fab color="primary" aria-label="edit" className={classes.fab} size="small">
            <Icon fontSize="small">
                edit_icon
            </Icon>
          </Fab>
          <Fab color="secondary" aria-label="delete" className={classes.fab} size="small">
            <Icon fontSize="small">
                delete_icon
            </Icon>
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(TaskItem);
