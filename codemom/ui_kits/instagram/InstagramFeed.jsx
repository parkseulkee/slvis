import React, { useState } from 'https://esm.sh/react@18.3.1';

export default function InstagramFeed() {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [slideIdx, setSlideIdx] = useState(0);

  const slides = [
    { src: '../../slides/01-cover-life.html', label: '표지' },
    { src: '../../slides/06-quote.html', label: '인용' },
    { src: '../../slides/05-timeline.html', label: '타임라인' },
    { src: '../../slides/09-cta.html', label: 'CTA' },
  ];

  return (
    <div className="ig-post">
      <header className="ig-header">
        <div className="ig-avatar" />
        <div className="ig-handle">
          <div className="name">codemom.life</div>
          <div className="meta">개발자 · 엄마 · 서울</div>
        </div>
        <button className="ig-more">···</button>
      </header>

      <div className="ig-carousel">
        <div className="carousel-track" style={{transform: `translateX(-${slideIdx * 100}%)`}}>
          {slides.map((s, i) => (
            <div className="carousel-slide" key={i}>
              <iframe src={s.src} title={s.label} />
            </div>
          ))}
        </div>
        <div className="carousel-counter">{slideIdx + 1}/{slides.length}</div>
        {slideIdx > 0 && <button className="car-nav left" onClick={() => setSlideIdx(slideIdx - 1)}>‹</button>}
        {slideIdx < slides.length - 1 && <button className="car-nav right" onClick={() => setSlideIdx(slideIdx + 1)}>›</button>}
      </div>

      <div className="ig-dots">
        {slides.map((_, i) => (
          <span key={i} className={`dot ${i === slideIdx ? 'active' : ''}`} />
        ))}
      </div>

      <div className="ig-actions">
        <div className="left-actions">
          <button onClick={() => setLiked(!liked)} className={liked ? 'liked' : ''}>
            {liked ? '❤️' : <HeartIcon />}
          </button>
          <button><ChatIcon /></button>
          <button><ShareIcon /></button>
        </div>
        <button onClick={() => setSaved(!saved)} className={saved ? 'saved' : ''}>
          {saved ? <BookmarkFill /> : <BookmarkIcon />}
        </button>
      </div>

      <div className="ig-likes">좋아요 <b>1,247</b>개</div>
      <div className="ig-caption">
        <b>codemom.life</b> 새벽 2시의 코딩 루틴, 솔직한 버전 ✍️
        <span className="more"> 더 보기</span>
      </div>
      <div className="ig-comments">댓글 <b>38</b>개 모두 보기</div>
      <div className="ig-time">3시간 전</div>
    </div>
  );
}

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
);
const ChatIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
);
const ShareIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
);
const BookmarkIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
);
const BookmarkFill = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
);
