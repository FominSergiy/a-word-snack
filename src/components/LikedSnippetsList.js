import React from 'react';
import './LikedSnippetsList.css';

const LikedSnippetsList = ({ likedSnippets, onSnippetClick, onClose }) => {
  if (!likedSnippets || likedSnippets.length === 0) {
    return (
      <div className="liked-snippets-list">
        <div className="list-header">
          <h2>Liked by Others</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        <div className="empty-state">
          <p>No liked snippets yet. Click "Generate Liked" to see what others are reading!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="liked-snippets-list">
      <div className="list-header">
        <h2>Liked by Others</h2>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>
      <div className="list-items">
        {likedSnippets.map((snippet) => (
          <div 
            key={snippet.id + (snippet.likedBy || '')} 
            className="list-item"
            onClick={() => onSnippetClick(snippet)}
          >
            <div className="item-thumbnail">{snippet.thumbnail}</div>
            <div className="item-content">
              <div className="item-title">{snippet.title}</div>
              <div className="item-author">by {snippet.author}</div>
              {snippet.likedBy && (
                <div className="item-liked-by">❤️ Liked by {snippet.likedBy}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikedSnippetsList;
