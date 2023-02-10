export const playAudio = (isPlaying, audioRef) => {
  if (isPlaying) {
    const playPromise = audioRef.current.play()
    // console.log(playPromise)
    if (playPromise !== undefined) {
      playPromise
        .then((audio) => {
          // console.log(audio)
          audioRef.current.play()
        })
        .catch((err) => console.log(err))
    }
  }
}
