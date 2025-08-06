import { Play, Heart, MoreHorizontal } from 'lucide-react'

interface MainContentProps {
  isPlaying: boolean
  setIsPlaying: (playing: boolean) => void
  currentTrack: any
  setCurrentTrack: (track: any) => void
}

const MainContent = ({ }: MainContentProps) => {
  const featuredPlaylists = [
    {
      id: 1,
      title: "Today's Top Hits",
      description: "The biggest hits right now.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop&crop=center",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Discover Weekly",
      description: "Your weekly mixtape of fresh music.",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=200&h=200&fit=crop&crop=center",
      color: "from-green-400 to-blue-500"
    },
    {
      id: 3,
      title: "Release Radar",
      description: "Catch all the latest music from artists you follow.",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=200&h=200&fit=crop&crop=center",
      color: "from-yellow-400 to-orange-500"
    },
    {
      id: 4,
      title: "Chill Hits",
      description: "Kick back to the best new and recent chill hits.",
      image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=200&h=200&fit=crop&crop=center",
      color: "from-blue-400 to-purple-500"
    },
    {
      id: 5,
      title: "Rock Classics",
      description: "Rock legends & epic songs that continue to influence generations.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop&crop=center",
      color: "from-red-500 to-pink-500"
    },
    {
      id: 6,
      title: "Hip Hop Controller",
      description: "The best Hip Hop tracks right now.",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=200&h=200&fit=crop&crop=center",
      color: "from-gray-600 to-gray-800"
    }
  ]

  const recentTracks = [
    { title: "Blinding Lights", artist: "The Weeknd", album: "After Hours", duration: "3:20" },
    { title: "Shape of You", artist: "Ed Sheeran", album: "÷ (Divide)", duration: "3:53" },
    { title: "Dance Monkey", artist: "Tones and I", album: "The Kids Are Coming", duration: "3:29" },
    { title: "Someone You Loved", artist: "Lewis Capaldi", album: "Divinely Uninspired to a Hellish Extent", duration: "3:02" },
    { title: "Bad Guy", artist: "Billie Eilish", album: "When We All Fall Asleep, Where Do We Go?", duration: "3:14" },
    { title: "Old Town Road", artist: "Lil Nas X", album: "7", duration: "2:37" },
    { title: "Sunflower", artist: "Post Malone, Swae Lee", album: "Spider-Man: Into the Spider-Verse", duration: "2:38" },
    { title: "Without Me", artist: "Halsey", album: "Manic", duration: "3:21" }
  ]

  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-spotify-dark to-spotify-darker">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-spotify-dark/80 backdrop-blur-sm p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="bg-spotify-lighter rounded-full p-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="bg-spotify-lighter rounded-full p-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-spotify-lighter rounded-full p-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            </button>
            <div className="w-8 h-8 bg-spotify-green rounded-full flex items-center justify-center">
              <span className="text-spotify-dark font-bold text-sm">U</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="p-6">
        <div className="gradient-bg rounded-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-4">Good afternoon</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {featuredPlaylists.slice(0, 6).map((playlist) => (
              <div key={playlist.id} className="bg-spotify-light/20 backdrop-blur-sm rounded-lg p-4 flex items-center gap-4 hover:bg-spotify-light/30 transition-colors cursor-pointer">
                <img src={playlist.image} alt={playlist.title} className="w-16 h-16 rounded object-cover" />
                <span className="font-semibold">{playlist.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Playlists */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Featured Playlists</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {featuredPlaylists.map((playlist) => (
              <div key={playlist.id} className="playlist-card group">
                <div className="relative mb-4">
                  <img src={playlist.image} alt={playlist.title} className="w-full aspect-square rounded object-cover" />
                  <button className="play-button absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play size={20} />
                  </button>
                </div>
                <h3 className="font-semibold text-sm mb-1 truncate">{playlist.title}</h3>
                <p className="text-spotify-textSecondary text-xs line-clamp-2">{playlist.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recently Played */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Recently Played</h2>
          <div className="bg-spotify-light rounded-lg">
            {recentTracks.map((track, index) => (
              <div key={index} className="track-item group">
                <div className="flex items-center gap-4 flex-1">
                  <span className="text-spotify-textMuted text-sm w-8">{index + 1}</span>
                  <img src={`https://images.unsplash.com/photo-${1500000000000 + index}?w=40&h=40&fit=crop&crop=center`} alt={track.title} className="w-10 h-10 rounded object-cover" />
                  <div className="flex-1">
                    <div className="font-medium text-sm">{track.title}</div>
                    <div className="text-spotify-textSecondary text-xs">{track.artist}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-spotify-textSecondary text-xs">{track.album}</span>
                  <span className="text-spotify-textMuted text-xs">{track.duration}</span>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart size={16} className="text-spotify-textSecondary hover:text-spotify-green" />
                  </button>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreHorizontal size={16} className="text-spotify-textSecondary" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContent