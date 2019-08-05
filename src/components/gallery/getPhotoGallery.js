import React, { Suspense } from 'react';
import Col from 'react-bootstrap/Col';
const Photo = React.lazy(() => import('../Photo'));

export default function getPhotoGallery(photos) {
  return photos.map(photo => (
    <Col key={photo.id} xs={6} md={4}>
      <Suspense fallback={<div>Loading...</div>}>
        <Photo src={photo.url} alt={photo.title} />
      </Suspense>
    </Col>
  ));
}
