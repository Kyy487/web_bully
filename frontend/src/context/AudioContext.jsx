import { createContext, useRef, useState } from "react"

export const AudioContext = createContext()

export function AudioProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const value = {
    isPlaying,
    setIsPlaying,
    audioRef,
    toggleMusic
  }

  return (
    <AudioContext.Provider value={value}>
      {children}
      <audio 
        ref={audioRef} 
        src="/music/tenang.mp3" 
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </AudioContext.Provider>
  )
}
