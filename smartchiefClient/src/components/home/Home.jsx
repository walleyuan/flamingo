import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { ListItem, List, ListItemIcon, ListItemText } from 'material-ui/List';
import FileUpload from 'material-ui-icons/FileUpload';
import CheckCircleIcon from 'material-ui-icons/CheckCircle';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Logo from 'Images/logo.jpg';
import ButtonImage from 'Images/button.jpg';

const STYLES = {
  fileinput: {
    width: 0.1,
    height: 0.1,
    opacity: 0,
    overflow: 'hidden',
    position: 'absolute',
    zIndex: -1,
  },
  spinnerDiv: {
    fontSize: 'xx-large',
    color: '#F24DC9',
    margin: '20px'
  }
};

const homeStyles = theme => ({
  home: {
    textAlign: 'center',
  },
  button: {
    margin: theme.spacing.unit,
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
  },
  list: {
    maxWidth: '100%',
    textAlign: 'left',
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    color: theme.palette.primary.main,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  image: {
    width: '100%',
  }
});

export function Home(props) {
  const { classes, foodList } = props;
  const foodListAll = Object.entries(foodList).map((item) => (<ListItem>
    <ListItemIcon>
    <CheckCircleIcon className={classes.icon}/>
  </ListItemIcon>
  <ListItemText>
    {item[0] + ': ' + item[1]}
  </ListItemText>
  </ListItem>
  ));
  return (
    <div className={classes.home}>
    <div>
      <img src={Logo} />
      <br />

      <input
        ref={props.setInputRef}
        style={STYLES.fileinput}
        type="file"
        onChange={props.fileChangedHandler}
      />
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        onClick={props.uploadPhoto}
      >
        Upload Photo
        <FileUpload className={classes.rightIcon} />
      </Button>
      </div>
      <div className={classes.list}>
      <Grid container spacing={24}>
      <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>{Object.keys(foodList).length !== 0 ? 
      <img
        alt="Your food shelf"
        src="https://previews.123rf.com/images/kert/kert1102/kert110200003/8856730-fruit-and-vegetables-in-the-fridge.jpg"
        className={classes.image}
        />
        : null }</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>{foodListAll}</Paper>
        </Grid>
      </Grid>
      </div>
      <div id="spinner" style={STYLES.spinnerDiv}>
          {props.loading? 'Loading...': ''}
               
      </div>
    </div>
  );
}

Home.propTypes = {
  foodList: PropTypes.arrayOf(PropTypes.shape(PropTypes.any)),
};

Home.defaultProps = {
  foodList: [],
  picture: {},
};

export default withStyles(homeStyles, { withTheme: true })(Home);
