# PodcastHub - Modern Podcast Listening Platform

A modern, responsive podcast listening platform built with React, TypeScript, and Tailwind CSS.

## 🎧 Features

### Core Features
- **Browse & Discover**: Explore trending podcasts, browse by category, and discover new content
- **Search & Filter**: Real-time search with category, rating, and duration filters
- **Audio Player**: Global audio player with play/pause, seek, volume control, and playback speed
- **Library Management**: Subscribe to podcasts, favorite episodes, and track listening history
- **Responsive Design**: Fully responsive UI that works on mobile, tablet, and desktop

### Pages
- **Homepage** (`/`): Featured podcast, trending shows, categories, and recent additions
- **Podcast Detail** (`/podcast/:id`): Full podcast info with sortable episode list
- **Search** (`/search`): Search and filter podcasts
- **Library** (`/library`): Subscriptions, favorites, and listening history
- **Category** (`/category/:name`): Browse podcasts by category

### Audio Player Features
- Play/Pause/Seek functionality
- 15-second skip forward/backward
- Volume control with mute toggle
- Playback speed control (0.5x, 1x, 1.5x, 2x)
- Progress bar with time display
- Expandable/collapsible player view
- Auto-save listening progress

## 🛠 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Routing**: React Router v6
- **State Management**: Zustand (with localStorage persistence)
- **Icons**: Lucide React
- **Package Manager**: pnpm

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Setup

1. Clone the repository and navigate to the project:
```bash
cd podcast-app
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open your browser and visit `http://localhost:3000`

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server on port 3000 |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build locally |
| `pnpm lint` | Run ESLint |
| `pnpm typecheck` | Run TypeScript type checking |

## 📁 Project Structure

```
podcast-app/
├── public/
│   └── vite.svg
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── Header.tsx        # Site navigation
│   │   ├── Hero.tsx          # Featured content banner
│   │   ├── PodcastCard.tsx   # Podcast card component
│   │   ├── PodcastList.tsx   # List/grid container
│   │   ├── EpisodeItem.tsx   # Episode list item
│   │   ├── PlayButton.tsx    # Play/pause button
│   │   ├── SubscribeButton.tsx
│   │   ├── GlobalAudioPlayer.tsx
│   │   ├── ProgressBar.tsx
│   │   ├── VolumeControl.tsx
│   │   ├── CategoryPill.tsx
│   │   ├── SearchBar.tsx
│   │   ├── FilterPanel.tsx
│   │   ├── LibraryTabs.tsx
│   │   ├── EmptyState.tsx
│   │   └── index.ts
│   ├── pages/                # Page components
│   │   ├── HomePage.tsx
│   │   ├── PodcastDetailPage.tsx
│   │   ├── SearchPage.tsx
│   │   ├── LibraryPage.tsx
│   │   ├── CategoryPage.tsx
│   │   └── index.ts
│   ├── hooks/                # Custom React hooks
│   │   ├── useAudioPlayer.ts
│   │   ├── useLocalStorage.ts
│   │   ├── useDebounce.ts
│   │   └── index.ts
│   ├── context/              # State management
│   │   ├── PlayerContext.tsx # Audio player state (Zustand)
│   │   ├── LibraryContext.tsx # Library state (Zustand)
│   │   └── index.ts
│   ├── types/                # TypeScript definitions
│   │   └── index.ts
│   ├── data/                 # Mock data
│   │   └── mockPodcasts.ts
│   ├── utils/                # Utility functions
│   │   ├── formatDuration.ts
│   │   ├── formatDate.ts
│   │   ├── helpers.ts
│   │   └── index.ts
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.ts
```

## 🎨 Features Implemented

### UI Components
- [x] Responsive header with mobile hamburger menu
- [x] Hero section with featured podcast
- [x] Podcast cards with hover effects
- [x] Episode list with play buttons
- [x] Global audio player (Spotify-like)
- [x] Progress bar with seek functionality
- [x] Volume control with mute toggle
- [x] Category pills/tags
- [x] Search bar with debounce
- [x] Filter panel
- [x] Empty states
- [x] Loading states
- [x] 404 page

### Functionality
- [x] Play/pause audio
- [x] Seek audio (click on progress bar)
- [x] Skip forward/backward 15 seconds
- [x] Playback speed control
- [x] Volume control
- [x] Subscribe/unsubscribe to podcasts
- [x] Favorite/unfavorite episodes
- [x] Listening history tracking
- [x] Search with filters
- [x] Category browsing
- [x] Responsive design (mobile/tablet/desktop)

### Accessibility
- [x] Semantic HTML structure
- [x] ARIA labels on interactive elements
- [x] Keyboard navigation support
- [x] Focus indicators
- [x] Screen reader friendly
- [x] Role attributes where appropriate

### State Persistence
- [x] Player preferences (volume, speed)
- [x] Subscribed podcasts
- [x] Favorite episodes
- [x] Listening history with progress

## 📱 Responsive Breakpoints

| Breakpoint | Screen Size | Layout |
|------------|-------------|--------|
| Mobile | < 768px | Single column, hamburger menu |
| Tablet | 768px - 1024px | 2-column grid |
| Desktop | > 1024px | 3-4 column grid |

## 🎵 Mock Data

The app includes:
- **12 podcasts** across 10 categories
- **60+ episodes** with realistic data
- Categories: Technology, Business, True Crime, Comedy, Education, Health & Fitness, News, Sports, Science, History
- Placeholder images from picsum.photos
- Audio samples from soundhelix.com

## 🔒 TypeScript

- Strict mode enabled
- No implicit `any` types
- All components have typed props
- Utility types used throughout (`Partial`, `Pick`, `Omit`)
- Enums for categories, playback speed, sort options

## 🚀 Performance Optimizations

- Route-based code splitting with React.lazy()
- Memoized components with React.memo()
- Debounced search input
- Lazy loading images
- Persistent state with Zustand

## 📝 Known Limitations

1. Audio files are from external sources (soundhelix.com) - may have loading delays
2. Mock data only - no backend integration
3. No user authentication
4. No actual download functionality
5. Sleep timer not implemented

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT License - feel free to use this project for learning or as a starting point for your own podcast app!
