import React, { useState } from 'react';
import './SnippetCardStack.css';

const SnippetCardStack = ({ snippets, onSnippetSelect }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('');

  if (!snippets || snippets.length === 0) {
    return null;
  }

  const handleNext = () => {
    setDirection('next');
    setTimeout(() => {
      const nextIndex = (currentIndex + 1) % snippets.length;
      setCurrentIndex(nextIndex);
      onSnippetSelect(snippets[nextIndex]);
      setDirection('');
    }, 300);
  };

  const handlePrevious = () => {
    setDirection('prev');
    setTimeout(() => {
      const prevIndex = (currentIndex - 1 + snippets.length) % snippets.length;
      setCurrentIndex(prevIndex);
      onSnippetSelect(snippets[prevIndex]);
      setDirection('');
    }, 300);
  };

  return (
    <div className="snippet-card-stack">
      <div className="stack-container">
        {snippets.map((snippet, index) => {
          const position = index - currentIndex;
          let className = 'stack-card';

          if (position === 0) {
            className += ` active ${direction}`;
          } else if (position > 0) {
            className += ' stack-right';
          } else {
            className += ' stack-left';
          }

          // Only render cards that are visible or adjacent
          if (Math.abs(position) > 1) {
            return null;
          }

          return (
            <div
              key={snippet.id}
              className={className}
              style={{
                zIndex: snippets.length - Math.abs(position),
                '--position': position,
              }}
            >
              <div className="stack-card-content">
                <div className="stack-card-thumbnail">{snippet.thumbnail}</div>
                <div className="stack-card-info">
                  <h3 className="stack-card-title">{snippet.title}</h3>
                  <p className="stack-card-author">by {snippet.author}</p>
                  <span className="stack-card-category">{snippet.category}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="stack-controls">
        <button
          className="stack-btn stack-btn-prev"
          onClick={handlePrevious}
          aria-label="Previous snippet"
        >
          ←
        </button>
        <div className="stack-indicator">
          {snippets.map((_, index) => (
            <span
              key={index}
              className={`indicator-dot ${index === currentIndex ? 'active' : ''}`}
            />
          ))}
        </div>
        <button
          className="stack-btn stack-btn-next"
          onClick={handleNext}
          aria-label="Next snippet"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default SnippetCardStack;
