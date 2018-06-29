import React from 'react';

import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import FileUpload from 'material-ui-icons/FileUpload';

const STYLES = {
  fileinput: {
    width: 0.1,
    height: 0.1,
    opacity: 0,
    overflow: 'hidden',
    position: 'absolute',
    zIndex: -1,
  },
}

const homeStyles = theme => ({
  home: {
    textAlign: 'center',
  },
  button: {
    margin: theme.spacing.unit,
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
  },
});

export function Home(props) {
  const { classes } = props;
  return (
    <div className={classes.home}>
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
  );
}

Home.propTypes = {
};

Home.defaultProps = {
};

export default withStyles(homeStyles, { withTheme: true })(Home);
