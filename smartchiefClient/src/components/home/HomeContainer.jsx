import React from 'react';
import PropTypes from 'prop-types';
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
    this.setState({
      photo: file,
    });
  }
  
  uploadPhoto = (e, file) => {
    this.fileInput.click();
  }

  render() {
    console.log(this.state.photo);
    return (
      <Home
        uploadPhoto={this.uploadPhoto}
        fileChangedHandler={this.fileChangedHandler}
        setInputRef={this.setInputRef}
        foodList={this.props.foodList}
        picture={this.state.photo}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    foodList: state.home.foodList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      uploadPhoto: bindActionCreators(actions.uploadPhoto, dispatch), 
    },
  };
}

HomeContainer.propTypes = {
  foodList: PropTypes.arrayOf(PropTypes.shape(PropTypes.any)),
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
