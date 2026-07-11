export default function requestFullscreen(el) {
  if (!el) return;
  const request = el.requestFullscreen || el.webkitRequestFullscreen || el.msRequestFullscreen;
  if (request) request.call(el);
}
