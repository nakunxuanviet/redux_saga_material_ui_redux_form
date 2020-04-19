import React, { Component } from "react";
import styles from "./style";
import { Button, withStyles } from "@material-ui/core";
import LoadingIcon from "../../assets/images/loading.gif";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as uiActions from "..//../actions/ui";

class GlobalLoading extends Component {
  render() {
    const { classes, showLoading } = this.props;
    let xhtml = null;
    if (showLoading) {
      xhtml = (
        <div className={classes.globalLoading}>
          <image src={LoadingIcon} alt="loading" className={classes.icon} />
        </div>
      );
    }
    return xhtml;
  }
}

GlobalLoading.prototype = {
  classes: PropTypes.object,
  showLoading: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    showLoading: state.ui.showLoading,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     uiActions: bindActionCreators(uiActions, dispatch),
//   };
// };

const withConnect = connect(mapStateToProps, null);

export default compose(withStyles(styles), withConnect)(GlobalLoading);
