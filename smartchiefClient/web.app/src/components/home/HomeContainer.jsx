import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'components/home/actions';
import Home from 'components/home/Home';

export class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: {},
    };
    this.fileInput = React.createRef();
  }

  setInputRef = (r) => {
    this.fileInput = r;
  }

  fileChangedHandler = (event) => {
    const file = event.target.files[0];
    debugger;
    this.props.actions.uploadPhoto(file);
  }
  
  uploadPhoto = (e, file) => {
  //  setTimeout(() => {
    this.fileInput.click();
  //  }, 200);
  }

  render() {
    return (
      <Home
        uploadPhoto={this.uploadPhoto}
        fileChangedHandler={this.fileChangedHandler}
        setInputRef={this.setInputRef}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      uploadPhoto: bindActionCreators(actions.uploadPhoto, dispatch), 
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
