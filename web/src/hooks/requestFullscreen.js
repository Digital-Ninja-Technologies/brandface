function isSupported(el) {
  const enabled = document.fullscreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled;
  const request = el.requestFullscreen || el.webkitRequestFullscreen || el.msRequestFullscreen;
  return Boolean(enabled && request);
}

// iOS Safari (and most in-app mobile browsers) don't support the Fullscreen API on
// arbitrary elements, only native <video> tags, so a cross-origin video iframe can
// never truly go fullscreen there. Fall back to opening the video directly.
export default function requestFullscreen(el, fallbackUrl) {
  if (!el) return;

  if (!isSupported(el)) {
    if (fallbackUrl) window.open(fallbackUrl, '_blank', 'noopener');
    return;
  }

  const request = el.requestFullscreen || el.webkitRequestFullscreen || el.msRequestFullscreen;
  const result = request.call(el);
  if (result && typeof result.catch === 'function') {
    result.catch(() => {
      if (fallbackUrl) window.open(fallbackUrl, '_blank', 'noopener');
    });
  }
}
