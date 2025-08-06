# Spotify Clone

A modern, responsive Spotify web interface clone built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful interface that closely resembles Spotify's design
- **Interactive Elements**: Hover effects, transitions, and smooth animations
- **Sidebar Navigation**: Complete sidebar with navigation items and playlists
- **Main Content Area**: Featured playlists, recently played tracks, and hero section
- **Player Controls**: Full-featured player with play/pause, skip, shuffle, and volume controls
- **Dark Theme**: Authentic Spotify dark theme with proper color scheme

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Lucide React** - Beautiful icons
- **ESLint** - Code linting and formatting

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd spotify-clone
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # React components
│   ├── Sidebar.tsx     # Navigation sidebar
│   ├── MainContent.tsx # Main content area
│   └── Player.tsx      # Music player controls
├── lib/                # Utility functions
│   └── utils.ts        # Class name utilities
├── App.tsx             # Main app component
├── main.tsx            # React entry point
└── index.css           # Global styles
```

## Features Implemented

### Sidebar
- Spotify logo and branding
- Navigation items (Home, Search, Your Library)
- Library actions (Create Playlist, Liked Songs, Your Episodes)
- Scrollable playlist list

### Main Content
- Sticky header with navigation controls
- Hero section with "Good afternoon" greeting
- Featured playlists grid with hover effects
- Recently played tracks list
- Responsive grid layouts

### Player
- Track information display
- Play/pause controls
- Skip forward/backward buttons
- Shuffle and repeat controls
- Progress bar
- Volume controls
- Queue button

### Design Elements
- Authentic Spotify color scheme
- Smooth hover transitions
- Gradient backgrounds
- Modern typography
- Responsive design patterns

## Customization

The app uses a custom Tailwind configuration with Spotify-specific colors:

- `spotify-green`: #1DB954 (Spotify's signature green)
- `spotify-dark`: #121212 (Main background)
- `spotify-light`: #282828 (Card backgrounds)
- `spotify-text`: #FFFFFF (Primary text)
- `spotify-textSecondary`: #B3B3B3 (Secondary text)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is for educational purposes only. Spotify is a registered trademark of Spotify AB.

## Acknowledgments

- Design inspiration from Spotify's web interface
- Icons from Lucide React
- Images from Unsplash
