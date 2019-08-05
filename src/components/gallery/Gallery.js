import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import getPhotoLimit from './getPhotoLimit';
import getErrorMessage from './getErrorMessage';
import getPhotoArrayFromApiWithLimit from './getPhotosFromApi';
import getPhotoGalleryFromArray from './getPhotoGallery';

export default class Gallery extends Component {
  state = {
    content: []
  };

  componentDidMount() {
    const photolimit = getPhotoLimit();

    if (photolimit > 0 && photolimit <= 100) {
      getPhotoArrayFromApiWithLimit(photolimit).then(data => {
        this.setState({
          content: getPhotoGalleryFromArray(data)
        });
      });
    } else {
      this.setState({ content: getErrorMessage() });
    }
  }

  render() {
    return (
      <div>
        <Container>
          <Row>{this.state.content}</Row>
        </Container>
      </div>
    );
  }
}
