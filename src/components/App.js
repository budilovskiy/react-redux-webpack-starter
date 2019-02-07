import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './App.css';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    height: 600,
    marginLeft: '10%',
    marginRight: '10%'
  }
});

const App = props => {
  const { classes } = props;

  return (
    <div className="App">
      <div className="App-background">
        <div className="App-header">
          <div className="App-header-column">LiteEx</div>
          <div className="App-header-column">LiteGo exchange</div>
        </div>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h5" component="h3">
            This is a sheet of paper.
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your application.
          </Typography>
        </Paper>
      </div>
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.shape({ root: PropTypes.string.isRequired }).isRequired
};

export default withStyles(styles)(App);
