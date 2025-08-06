import { Home, Search, Library, Plus, Heart, Download } from 'lucide-react'
import { cn } from '../lib/utils'

const Sidebar = () => {
  const navigationItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Search, label: 'Search', active: false },
    { icon: Library, label: 'Your Library', active: false },
  ]

  const libraryItems = [
    { icon: Plus, label: 'Create Playlist', active: false },
    { icon: Heart, label: 'Liked Songs', active: false },
    { icon: Download, label: 'Your Episodes', active: false },
  ]

  const playlists = [
    'Today\'s Top Hits',
    'Discover Weekly',
    'Release Radar',
    'Chill Hits',
    'Rock Classics',
    'Hip Hop Controller',
    'Peaceful Piano',
    'Deep Focus',
    'Instrumental Study',
    'Chillout Lounge',
    'Calm Vibes',
    'Energy Booster',
    'Workout Mix',
    'Party Hits',
    'Sleep Sounds'
  ]

  return (
    <div className="w-64 bg-spotify-dark flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <div className="text-spotify-green text-2xl font-bold">Spotify</div>
      </div>

      {/* Navigation */}
      <div className="px-6 mb-6">
        {navigationItems.map((item) => (
          <div key={item.label} className={cn(
            "sidebar-item",
            item.active && "active"
          )}>
            <item.icon size={24} />
            <span className="font-medium">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Library Section */}
      <div className="px-6 mb-6">
        {libraryItems.map((item) => (
          <div key={item.label} className="sidebar-item">
            <item.icon size={24} />
            <span className="font-medium">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Playlists */}
      <div className="flex-1 overflow-y-auto px-6">
        <div className="border-t border-spotify-lighter pt-4">
          {playlists.map((playlist) => (
            <div key={playlist} className="sidebar-item">
              <span className="text-sm">{playlist}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar