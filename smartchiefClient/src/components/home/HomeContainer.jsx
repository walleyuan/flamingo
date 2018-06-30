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
    this.props.actions.uploadPhoto(file);
  }
  
  uploadPhoto = (e, file) => {
  //  setTimeout(() => {
    this.fileInput.click();
  //  }, 200);
  }

  render() {
    console.log(this.props);
    return (
      <Home
        uploadPhoto={this.uploadPhoto}
        fileChangedHandler={this.fileChangedHandler}
        setInputRef={this.setInputRef}
        foodList={this.props.foodList}
        loading={this.props.loading}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    foodList: state.home.foodList,
    loading: state.home.loading
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
