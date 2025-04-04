import { useRef, useCallback, useMemo, useState, useEffect } from "react"

interface UseSoundEffectOptions {
  volume?: number
  playbackRate?: number
  interrupt?: boolean // Should playing restart the sound if already playing?
  soundEnabled?: boolean // Global switch to disable sound
  preload?: "auto" | "metadata" | "none"
  // Add other HTMLAudioElement properties you might want to control
}

const defaultOptions: UseSoundEffectOptions = {
  volume: 0.5, // Default volume
  playbackRate: 1,
  interrupt: true, // Default is to restart sound
  soundEnabled: true,
  preload: "auto",
}

export function useSoundEffect(
  soundSrc: string,
  options: UseSoundEffectOptions = {},
) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  // Combine default and user options
  const {
    volume,
    playbackRate,
    interrupt,
    preload,
    soundEnabled = true,
  } = {
    ...defaultOptions,
    ...options,
  }
  const [isReady, setIsReady] = useState(true)

  // Callback ref to manage the audio element instance
  const setAudioRef = useCallback(
    (node: HTMLAudioElement | null) => {
      if (node) {
        // Add listeners when the node is attached
        const handleCanPlayThrough = () => setIsReady(true)
        const handleError = (e: Event | string) => {
          console.error(`Error loading audio: ${soundSrc}`, e)
          setIsReady(false) // Mark as not ready on error
        }

        node.addEventListener("canplaythrough", handleCanPlayThrough)
        node.addEventListener("error", handleError)
        audioRef.current = node

        // Cleanup function for when the component using the ref unmounts
        // or the ref callback changes
        return () => {
          node.removeEventListener("canplaythrough", handleCanPlayThrough)
          node.removeEventListener("error", handleError)
          setIsReady(false)
          // Optional: Pause audio on unmount?
          // node.pause();
        }
      } else {
        // Node is detached
        audioRef.current = null
        setIsReady(false)
      }
      // No dependencies needed for this specific callback ref pattern
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [soundSrc],
  ) // Re-run if soundSrc changes

  // The core play function
  const play = useCallback(() => {
    // Don't play if sound is disabled globally or not ready
    if (!soundEnabled || !audioRef.current || !isReady) {
      if (!soundEnabled)
        console.warn("Sound is disabled via soundEnabled prop.")
      if (!isReady) console.warn(`Sound not ready to play: ${soundSrc}`)
      return
    }

    // Apply dynamic options
    audioRef.current.volume = volume || 0
    audioRef.current.playbackRate = playbackRate || 0

    if (interrupt || audioRef.current.paused) {
      audioRef.current.currentTime = 0 // Rewind
      audioRef.current.play().catch((error) => {
        // Autoplay policies might prevent playback without user interaction.
        console.error(`Audio playback failed for ${soundSrc}:`, error)
      })
    }
    // If interrupt is false and sound is already playing, do nothing.
  }, [soundEnabled, isReady, volume, playbackRate, interrupt, soundSrc]) // Ensure all dependencies are listed

  // Effect to update audio properties when options change after initial load
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume || 0
      audioRef.current.playbackRate = playbackRate || 0
      // Note: preload is usually set initially, changing it might require recreating the element
    }
  }, [volume, playbackRate])

  // A simple component to render the hidden audio element
  // Memoize it to prevent unnecessary re-renders
  const AudioComponent = useMemo(() => {
    return (
      <audio
        ref={setAudioRef}
        preload={preload}
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <source src={soundSrc} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    )
  }, [soundSrc, preload, setAudioRef])

  return { play, AudioComponent, isReady, audioRef }
}
