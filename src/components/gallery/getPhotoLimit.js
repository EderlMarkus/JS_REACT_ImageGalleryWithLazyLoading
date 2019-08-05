export default function getPhotoLimit() {
  return window.location.search.substr(1).split('photo_limit=')[1];
}
