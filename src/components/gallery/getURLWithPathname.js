export default function getURLWithPathname() {
  const loc = window.location;
  if (loc.pathname === '/') {
    return loc.host;
  }
  return loc.host + loc.pathname;
}
