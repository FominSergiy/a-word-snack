import React from 'react';
import './SnippetViewer.css';

const SnippetViewer = ({ snippet, isLiked, onLike }) => {
  if (!snippet) {
    return (
      <div className="snippet-viewer">
        <div className="empty-viewer">
          <div className="empty-icon">📚</div>
          <p>Select a snippet to start reading</p>
          <p className="empty-hint">Generate daily snippets or browse liked recommendations</p>
        </div>
      </div>
    );
  }

  return (
    <div className="snippet-viewer">
      <div className="viewer-header">
        <div className="header-content">
          <div className="book-thumbnail">{snippet.thumbnail}</div>
          <div className="book-info">
            <h1 className="book-title">{snippet.title}</h1>
            <p className="book-author">by {snippet.author}</p>
            <span className="book-category">{snippet.category}</span>
          </div>
        </div>
        <button 
          className={`like-btn ${isLiked ? 'liked' : ''}`}
          onClick={onLike}
          aria-label={isLiked ? 'Unlike' : 'Like'}
        >
          {isLiked ? '❤️' : '🤍'}
        </button>
      </div>

      <div className="viewer-content">
        <div className="reading-time">
          <span>📖 ~15 min read</span>
        </div>
        <div className="summary-text">
          {snippet.summary.split('\n').map((paragraph, index) => {
            // Handle markdown bold
            const parts = paragraph.split(/(\*\*.*?\*\*)/g);
            return (
              <p key={index}>
                {parts.map((part, i) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={i}>{part.slice(2, -2)}</strong>;
                  }
                  return <span key={i}>{part}</span>;
                })}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SnippetViewer;
