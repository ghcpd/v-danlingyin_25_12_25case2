import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import PodcastDetailPage from './pages/PodcastDetailPage';
import SearchPage from './pages/SearchPage';
import LibraryPage from './pages/LibraryPage';
import CategoryPage from './pages/CategoryPage';
import GlobalAudioPlayer from './components/GlobalAudioPlayer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-black text-white">
      <div className="fixed left-0 top-0 -z-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/podcast/:id" element={<PodcastDetailPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/category/:name" element={<CategoryPage />} />
      </Routes>
      <GlobalAudioPlayer />
    </div>
  );
};

export default App;
