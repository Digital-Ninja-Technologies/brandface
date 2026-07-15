import { useRef, useState } from 'react';
import FullscreenIcon from './FullscreenIcon.jsx';
import PlayIcon from './PlayIcon.jsx';
import PauseIcon from './PauseIcon.jsx';
import useIsMobile from '../hooks/useIsMobile.js';
import requestFullscreen from '../hooks/requestFullscreen.js';
import { VIDEO_EMBED_URL, VIDEO_VIEW_URL } from '../siteConfig.js';

// Desktop keeps the corner fullscreen button (real Fullscreen API support).
// Mobile browsers mostly don't support fullscreening an arbitrary element, so that
// button used to fall back to opening the video on drive.google.com instead -
// confusing since it looked like a video control but left the page. Mobile now gets
// a real play/pause toggle: the iframe isn't even mounted until the user taps play.
export default function VideoBox({
  title,
  embedUrl = VIDEO_EMBED_URL,
  viewUrl = VIDEO_VIEW_URL,
  className = '',
}) {
  const isMobile = useIsMobile();
  const boxRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const showIframe = !isMobile || playing;

  return (
    <div className={`bf-video-box ${className}`} ref={boxRef}>
      {!isMobile && (
        <button
          type="button"
          className="bf-video-fullscreen-btn"
          aria-label="Watch full screen"
          title="Watch full screen"
          onClick={() => requestFullscreen(boxRef.current, viewUrl)}
        >
          <FullscreenIcon size={16} />
        </button>
      )}

      {showIframe && (
        <iframe
          src={embedUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          title={title}
        />
      )}

      {isMobile && !playing && (
        <button type="button" className="bf-video-play-btn" aria-label="Play video" onClick={() => setPlaying(true)}>
          <PlayIcon size={22} />
        </button>
      )}

      {isMobile && playing && (
        <button type="button" className="bf-video-pause-btn" aria-label="Pause video" onClick={() => setPlaying(false)}>
          <PauseIcon size={16} />
        </button>
      )}
    </div>
  );
}
