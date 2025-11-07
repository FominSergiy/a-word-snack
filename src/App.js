import React, { useState, useEffect } from 'react';
import './App.css';
import SnippetViewer from './components/SnippetViewer';
import LikedSnippetsList from './components/LikedSnippetsList';
import { storage } from './utils/storage';
import { getRandomSnippets, getRandomLikedSnippet } from './utils/mockData';

function App() {
  const [dailySnippets, setDailySnippets] = useState([]);
  const [currentSnippet, setCurrentSnippet] = useState(null);
  const [likedSnippets, setLikedSnippets] = useState([]);
  const [myLikedSnippets, setMyLikedSnippets] = useState([]);
  const [showLikedList, setShowLikedList] = useState(false);

  // Load data on mount
  useEffect(() => {
    const savedDaily = storage.getDailySnippets();
    const savedLiked = storage.getLikedSnippets();
    
    if (savedDaily.length > 0) {
      setDailySnippets(savedDaily);
      setCurrentSnippet(savedDaily[0]);
    }
    
    setMyLikedSnippets(savedLiked);
  }, []);

  // Generate 2 random daily snippets
  const handleGenerateDaily = () => {
    const snippets = getRandomSnippets(2);
    setDailySnippets(snippets);
    storage.saveDailySnippets(snippets);
    setCurrentSnippet(snippets[0]);
  };

  // Generate a random "liked by others" snippet
  const handleGenerateLiked = () => {
    const likedSnippet = getRandomLikedSnippet();
    const newLikedSnippets = [...likedSnippets, likedSnippet];
    setLikedSnippets(newLikedSnippets);
    setShowLikedList(true);
  };

  // Handle clicking on a snippet from the liked list
  const handleSnippetClick = (snippet) => {
    setCurrentSnippet(snippet);
    setShowLikedList(false);
  };

  // Toggle like status of current snippet
  const handleLike = () => {
    if (!currentSnippet) return;

    const isCurrentlyLiked = storage.isLiked(currentSnippet.id);
    
    if (isCurrentlyLiked) {
      const updated = storage.removeLikedSnippet(currentSnippet.id);
      setMyLikedSnippets(updated);
    } else {
      const updated = storage.addLikedSnippet(currentSnippet);
      setMyLikedSnippets(updated);
    }
  };

  const isCurrentSnippetLiked = currentSnippet ? storage.isLiked(currentSnippet.id) : false;

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-content">
          <h1>📚 Commute Recaps</h1>
          <p>Learn something new during your commute</p>
        </div>
      </header>

      <div className="app-container">
        <div className="controls">
          <div className="control-group">
            <button className="btn btn-primary" onClick={handleGenerateDaily}>
              🔄 Generate Daily Snippets
            </button>
            <button className="btn btn-secondary" onClick={handleGenerateLiked}>
              ❤️ Generate Liked
            </button>
            <button 
              className="btn btn-outline" 
              onClick={() => setShowLikedList(!showLikedList)}
            >
              {showLikedList ? '📖 View Reader' : '👥 View Liked by Others'}
            </button>
          </div>
          
          {dailySnippets.length > 0 && (
            <div className="daily-snippets-selector">
              <label>Your Daily Snippets:</label>
              <div className="snippet-buttons">
                {dailySnippets.map((snippet, index) => (
                  <button
                    key={snippet.id}
                    className={`snippet-btn ${currentSnippet?.id === snippet.id ? 'active' : ''}`}
                    onClick={() => setCurrentSnippet(snippet)}
                  >
                    <span className="snippet-emoji">{snippet.thumbnail}</span>
                    <span className="snippet-title">{snippet.title}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="content-area">
          {showLikedList ? (
            <LikedSnippetsList
              likedSnippets={likedSnippets}
              onSnippetClick={handleSnippetClick}
              onClose={() => setShowLikedList(false)}
            />
          ) : (
            <SnippetViewer
              snippet={currentSnippet}
              isLiked={isCurrentSnippetLiked}
              onLike={handleLike}
            />
          )}
        </div>

        {myLikedSnippets.length > 0 && !showLikedList && (
          <div className="my-likes-section">
            <h3>Your Liked Snippets</h3>
            <div className="my-likes-grid">
              {myLikedSnippets.map((snippet) => (
                <div
                  key={snippet.id}
                  className="my-like-card"
                  onClick={() => setCurrentSnippet(snippet)}
                >
                  <div className="like-card-thumbnail">{snippet.thumbnail}</div>
                  <div className="like-card-title">{snippet.title}</div>
                  <div className="like-card-author">{snippet.author}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
