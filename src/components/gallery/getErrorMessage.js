import React from 'react';
import getURLWithPathname from './getURLWithPathname';

/**
 * Returns JSX of an Error-Message for invalid number of Photo-Limit
 */
export default function getErrorMessage() {
  const exampleUrl = getURLWithPathname() + '?photo_limit=5';
  return (
    <div style={style}>
      <h1>Please choose a photo_limit between 1 and 100</h1>
      <br />
      <h3>simply add "?photo_limit=YOURNUMBER" to the url</h3>
      <br />
      <p>For example: {exampleUrl}</p>
    </div>
  );
}

const style = {
  fontWeight: 'bold',
  textAlign: 'center',
  width: '100%'
};
