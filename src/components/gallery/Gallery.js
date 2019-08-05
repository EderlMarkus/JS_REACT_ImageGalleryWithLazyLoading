import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import getPhotoLimit from './getPhotoLimit';
import getPhotoGallery from './getPhotoGallery';
import getErrorMessage from './getErrorMessage';

export default class Gallery extends Component {
  state = {
    photos: [],
    limit: 0
  };

  componentDidMount() {
    this.setState({ limit: getPhotoLimit() }, () => {
      if (this.state.limit > 0 && this.state.limit <= 100) {
        axios
          .get(
            'https://jsonplaceholder.typicode.com/photos/?_limit=' +
              this.state.limit
          )
          .then(res => this.setState({ photos: res.data }));
      }
    });
  }

  render() {
    let content;
    if (this.state.limit > 0) {
      content = getPhotoGallery(this.state.photos);
    } else {
      content = getErrorMessage();
    }
    return (
      <div>
        <Container>
          <Row>{content}</Row>
        </Container>
      </div>
    );
  }
}
