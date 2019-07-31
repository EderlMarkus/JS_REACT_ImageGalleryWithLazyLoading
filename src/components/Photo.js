import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';

export default class Photo extends Component {
  render() {
    return (
      <div>
        <Image src={this.props.src} thumbnail />
      </div>
    );
  }
}

Photo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};
