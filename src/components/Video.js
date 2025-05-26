import React, { useState } from 'react';

function Video() {
  const [isOpen, setIsOpen] = useState(false);
  const videoId = 'xcWIX0uGv7I';
  const thumbnailUrl = '/assets/images/Video-img/video-thumbnail.WEBP';

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="video-wrapper" id="video">
      <div
        className="video-section"
        style={{ backgroundImage: `url(${thumbnailUrl})` }}
      >
        <button className="play-button" onClick={openModal}>
          <img
            src="/assets/images/Video-img/icon-img.png"
            alt="Play"
            className="play-icon"
          />
        </button>

        {isOpen && (
          <div className="video-modal-overlay" onClick={closeModal}>
            <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={closeModal}>×</button>
              <iframe
                className="youtube-iframe"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Video;
