import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { ListItem, List, ListItemIcon, ListItemText } from 'material-ui/List';
import FileUpload from 'material-ui-icons/FileUpload';
import CheckCircleIcon from 'material-ui-icons/CheckCircle';

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
    textAlign: 'center',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

export function Home(props) {
  const { classes, foodList } = props;
  const foodListAll = Object.entries(foodList).map((item) => (<ListItem>
    <ListItemIcon>
    <CheckCircleIcon />
  </ListItemIcon>
  <ListItemText primary={item} />
  </ListItem>
  ));
  // const foodListAll = foodList.map(item=> (<ListItem>
  //   <ListItemIcon>
  //         <CheckCircleIcon />
  //       </ListItemIcon>
  //       <ListItemText primary={item.value} />
  //       </ListItem>
  //       ))
  return (
    <div className={classes.home}>
    <div>
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
        {foodListAll}
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
};

export default withStyles(homeStyles, { withTheme: true })(Home);
