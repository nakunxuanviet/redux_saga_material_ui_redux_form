import React, { Component } from 'react';
import { ThemeProvider } from "@material-ui/styles";
import { withStyles } from "@material-ui/core/styles";
import styles from "./style";
import TaskBoard from '../TaskBoard/index';
import theme from '../../commons/Theme'

 
class App  extends Component {
  render() { 
    //var {classes} = this.props;
    
    return (
      <ThemeProvider theme={theme}>
        <TaskBoard/>
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
