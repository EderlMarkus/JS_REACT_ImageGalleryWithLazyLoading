/**
 * returns the value of a get-parameter in the url named 'photo_limit'
 */
export default function getPhotoLimit() {
  const parameterstring = window.location.search
    .substr(1)
    .split('photo_limit=')[1];

  if (typeof parameterstring == 'undefined') return 0;

  if (parameterstring.includes('&')) {
    return parameterstring.split('&')[0];
  }
  return parameterstring;
}
