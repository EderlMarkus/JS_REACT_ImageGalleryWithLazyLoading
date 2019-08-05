import React, { Suspense } from 'react';
import Col from 'react-bootstrap/Col';
const Photo = React.lazy(() => import('../Photo'));

/**
 * Takes in an Array of Objects and turns them into React-Components.
 * The Objects in the Array need the following data: id, url, title.
 * Returns a List of React-Components.
 */
export default function getPhotoGalleryFromArray(array) {
  return array.map(photo => (
    <Col key={photo.id} xs={6} md={4}>
      <Suspense fallback={<div>Loading...</div>}>
        <Photo src={photo.url} alt={photo.title} />
      </Suspense>
    </Col>
  ));
}
