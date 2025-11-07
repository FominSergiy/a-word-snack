# Commute Book Recaps

A web-based demo app that provides 15-minute book summaries for commuters.

## Features

- **Daily Snippets**: Generate 2 random book summaries each day
- **Liked by Others**: See what snippets other users (demo) have liked
- **Personal Library**: Like and save your favorite snippets
- **Browser Storage**: All data stored locally (no database needed)
- **Responsive Design**: Works on desktop and mobile

## Tech Stack

- React 18
- LocalStorage for data persistence
- CSS3 with modern styling
- Mock data (can be replaced with real API)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone or download this project

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── LikedSnippetsList.js      # List of snippets liked by others
│   ├── LikedSnippetsList.css
│   ├── SnippetViewer.js          # Main reading interface
│   └── SnippetViewer.css
├── utils/
│   ├── storage.js                # LocalStorage management
│   └── mockData.js               # Mock book summaries
├── App.js                        # Main application component
├── App.css
├── index.js
└── index.css
```

## Usage

### Generate Daily Snippets
Click "Generate Daily Snippets" to get 2 random book summaries. These are saved to browser storage.

### View Liked by Others
Click "Generate Liked" to simulate other users liking snippets. Click "View Liked by Others" to see the list.

### Like a Snippet
Click the heart icon in the snippet viewer to save it to your personal library.

### Browse Your Library
Scroll down to see all snippets you've liked. Click any card to view it again.

## Future Enhancements

### API Integration
Replace the mock data in `src/utils/mockData.js` with real API calls. Suggested APIs:

1. **Google Books API** (Free)
   - Endpoint: `https://www.googleapis.com/books/v1/volumes?q={query}`
   - Provides book descriptions and metadata
   - No authentication required for basic usage

2. **Open Library API** (Free)
   - Endpoint: `https://openlibrary.org/api/books`
   - Large database of book information
   - Can search by ISBN, title, author

### Adding Voice Playback
To add audio playback of summaries:

1. Install a text-to-speech library:
```bash
npm install react-speech-kit
```

2. Add audio controls to `SnippetViewer.js`

3. Use Web Speech API or a service like:
   - Google Cloud Text-to-Speech
   - Amazon Polly
   - ElevenLabs API

### Daily Refresh
Add a mechanism to automatically refresh snippets daily:

```javascript
// In App.js
useEffect(() => {
  const lastRefresh = localStorage.getItem('lastRefresh');
  const today = new Date().toDateString();
  
  if (lastRefresh !== today) {
    handleGenerateDaily();
    localStorage.setItem('lastRefresh', today);
  }
}, []);
```

### Category Filtering
Add topic selection (science, fiction, business, etc.):

1. Add category buttons in the controls
2. Filter mock data by category
3. Store user preferences in localStorage

## Customization

### Changing Colors
Edit the gradient colors in `src/App.css` and `src/components/SnippetViewer.css`:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Adding More Books
Add more book summaries to `src/utils/mockData.js` following the existing format.

### Adjusting Storage Limit
To change the number of daily snippets, modify the call in `App.js`:

```javascript
const snippets = getRandomSnippets(3); // Change from 2 to 3
```

## Browser Storage

The app uses `localStorage` with two keys:
- `dailySnippets`: Currently displayed daily snippets (max 2)
- `likedSnippets`: User's liked snippets (unlimited)

To clear all data:
```javascript
localStorage.clear();
```

## Contributing

This is a demo project. Feel free to fork and extend it!

## License

MIT License - feel free to use this for your own projects.
