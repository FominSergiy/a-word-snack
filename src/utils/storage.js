// Storage utility for managing snippets in browser memory
const STORAGE_KEYS = {
  DAILY_SNIPPETS: 'dailySnippets',
  LIKED_SNIPPETS: 'likedSnippets'
};

export const storage = {
  // Get daily snippets
  getDailySnippets: () => {
    const data = localStorage.getItem(STORAGE_KEYS.DAILY_SNIPPETS);
    return data ? JSON.parse(data) : [];
  },

  // Save daily snippets (overwrites existing)
  saveDailySnippets: (snippets) => {
    localStorage.setItem(STORAGE_KEYS.DAILY_SNIPPETS, JSON.stringify(snippets));
  },

  // Get liked snippets
  getLikedSnippets: () => {
    const data = localStorage.getItem(STORAGE_KEYS.LIKED_SNIPPETS);
    return data ? JSON.parse(data) : [];
  },

  // Add a liked snippet
  addLikedSnippet: (snippet) => {
    const liked = storage.getLikedSnippets();
    const exists = liked.find(s => s.id === snippet.id);
    if (!exists) {
      liked.push(snippet);
      localStorage.setItem(STORAGE_KEYS.LIKED_SNIPPETS, JSON.stringify(liked));
    }
    return liked;
  },

  // Remove a liked snippet
  removeLikedSnippet: (snippetId) => {
    const liked = storage.getLikedSnippets();
    const filtered = liked.filter(s => s.id !== snippetId);
    localStorage.setItem(STORAGE_KEYS.LIKED_SNIPPETS, JSON.stringify(filtered));
    return filtered;
  },

  // Check if snippet is liked
  isLiked: (snippetId) => {
    const liked = storage.getLikedSnippets();
    return liked.some(s => s.id === snippetId);
  }
};
