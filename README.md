# PulseCast - Podcast Listening Website

Modern, responsive podcast listening experience built with React 18, TypeScript, Vite, and Tailwind CSS. Includes global audio player, discovery, search with filters, podcast detail views, subscriptions, favorites, and listening history backed by localStorage.

## Tech Stack
- React 18 + TypeScript (strict)
- Vite build tool
- Tailwind CSS for styling
- React Router v6 for routing
- pnpm for package management

## Getting Started
1. Install dependencies
   ```bash
   pnpm install
   ```
2. Run the development server
   ```bash
   pnpm dev
   ```
   The app defaults to http://localhost:5173
3. Build for production
   ```bash
   pnpm build
   ```
4. Preview the production build
   ```bash
   pnpm preview
   ```

## Project Structure
```
public/
  vite.svg
src/
  components/   # Reusable UI components (cards, player, controls)
  pages/        # Routed views (home, search, detail, library, category)
  hooks/        # Custom hooks (debounce, local storage, audio)
  context/      # Player and library providers
  data/         # Mock podcast + episode data
  utils/        # Helpers for formatting
  types/        # Shared TypeScript types
  App.tsx       # Routes and layout
  main.tsx      # Entry point
```

## Features Implemented
- Discover/home with hero, trending, categories, and recently added sections
- Podcast detail page with metadata, stats, sorting, episodes list, subscribe
- Global audio player with play/pause, skip, seek, volume, keyboard shortcuts
- Search page with debounce, category/duration/rating filters, sorting
- Library with subscriptions, favorites, and listening history (localStorage)
- Category view for filtered browsing
- Responsive layouts (mobile/tablet/desktop), WCAG-friendly focus + labels
- Mock data: 12 podcasts with 5–6 episodes each, placeholder images/audio

## Validation & Testing
- TypeScript strict mode enforced (`tsconfig.json`)
- Tailwind configured with custom fonts/colors
- Manual: run `pnpm build` to validate compile success

## Known Limitations
- Audio duration uses mock metadata; real streams may differ
- Sharing, download, sleep timer, and speed control are not implemented (nice-to-haves in spec)

## Accessibility Notes
- Keyboard: Space toggles play/pause, Arrow keys skip prev/next
- ARIA labels on icon buttons; focus outlines via Tailwind styles
- Semantic regions (`role="main"`, `nav` elements)
