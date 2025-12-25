import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, GlobalAudioPlayer } from './components';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const PodcastDetailPage = lazy(() => import('./pages/PodcastDetailPage'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
const LibraryPage = lazy(() => import('./pages/LibraryPage'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));

// Loading fallback component
const PageLoader: React.FC = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin" />
      <p className="text-gray-500 dark:text-gray-400">Loading...</p>
    </div>
  </div>
);

// 404 Not Found component
const NotFound: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
    <h1 className="text-6xl font-bold text-gray-200 dark:text-gray-700 mb-4">404</h1>
    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
      Page Not Found
    </h2>
    <p className="text-gray-500 dark:text-gray-400 text-center mb-6">
      The page you're looking for doesn't exist or has been moved.
    </p>
    <a
      href="/"
      className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
    >
      Go to Home
    </a>
  </div>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/podcast/:id" element={<PodcastDetailPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/category/:name" element={<CategoryPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        {/* Global Audio Player */}
        <GlobalAudioPlayer />
      </div>
    </BrowserRouter>
  );
};

export default App;
