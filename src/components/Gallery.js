import React, { Component, lazy, Suspense } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
const Photo = React.lazy(() => import('./Photo'));

export default class Gallery extends Component {
  state = {
    photos: []
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/photos/?_limit=20')
      .then(res => this.setState({ photos: res.data }));
  }

  render() {
    const gallery = this.state.photos.map(photo => (
      <Col key={photo.id} xs={6} md={4}>
        <Suspense fallback={<div>Loading...</div>}>
          <Photo src={photo.url} alt={photo.title} />
        </Suspense>
      </Col>
    ));

    return (
      <div>
        <Container>
          <Row>{gallery}</Row>
        </Container>
      </div>
    );
  }
}
