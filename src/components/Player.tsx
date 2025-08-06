import { Play, Pause, SkipBack, SkipForward, Volume2, Shuffle, Repeat, Heart, List } from 'lucide-react'

interface PlayerProps {
  isPlaying: boolean
  setIsPlaying: (playing: boolean) => void
  currentTrack: any
}

const Player = ({ isPlaying, setIsPlaying, currentTrack }: PlayerProps) => {
  return (
    <div className="h-20 bg-spotify-light border-t border-spotify-lighter flex items-center justify-between px-4">
      {/* Left Section - Track Info */}
      <div className="flex items-center gap-4 flex-1">
        <img 
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=56&h=56&fit=crop&crop=center" 
          alt={currentTrack.title} 
          className="w-14 h-14 rounded object-cover"
        />
        <div className="flex flex-col">
          <span className="font-medium text-sm hover:underline cursor-pointer">{currentTrack.title}</span>
          <span className="text-spotify-textSecondary text-xs hover:underline cursor-pointer">{currentTrack.artist}</span>
        </div>
        <button className="text-spotify-textSecondary hover:text-spotify-text transition-colors">
          <Heart size={16} />
        </button>
      </div>

      {/* Center Section - Playback Controls */}
      <div className="flex flex-col items-center flex-1">
        <div className="flex items-center gap-6 mb-2">
          <button className="text-spotify-textSecondary hover:text-spotify-text transition-colors">
            <Shuffle size={20} />
          </button>
          <button className="text-spotify-textSecondary hover:text-spotify-text transition-colors">
            <SkipBack size={20} />
          </button>
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-spotify-text text-spotify-dark rounded-full p-2 hover:scale-105 transition-transform"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button className="text-spotify-textSecondary hover:text-spotify-text transition-colors">
            <SkipForward size={20} />
          </button>
          <button className="text-spotify-textSecondary hover:text-spotify-text transition-colors">
            <Repeat size={20} />
          </button>
        </div>
        
        {/* Progress Bar */}
        <div className="flex items-center gap-2 w-full max-w-md">
          <span className="text-spotify-textSecondary text-xs">1:23</span>
          <div className="flex-1 bg-spotify-lighter rounded-full h-1">
            <div className="bg-spotify-text rounded-full h-1 w-1/3"></div>
          </div>
          <span className="text-spotify-textSecondary text-xs">{currentTrack.duration}</span>
        </div>
      </div>

      {/* Right Section - Volume Controls */}
      <div className="flex items-center gap-4 flex-1 justify-end">
        <button className="text-spotify-textSecondary hover:text-spotify-text transition-colors">
          <List size={20} />
        </button>
        <div className="flex items-center gap-2">
          <Volume2 size={20} className="text-spotify-textSecondary" />
          <div className="w-24 bg-spotify-lighter rounded-full h-1">
            <div className="bg-spotify-text rounded-full h-1 w-2/3"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Player