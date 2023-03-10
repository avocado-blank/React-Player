import { playAudio } from '../playAudio'

function LibrarySongs({
  song,
  setCurrentSong,
  audioRef,
  isPlaying,
  songs,
  id,
  setSongs,
}) {
  const selectSongHandler = () => {
    setCurrentSong(song)
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return { ...song, active: true }
      } else {
        return { ...song, active: false }
      }
    })
    setSongs(newSongs)
    playAudio(isPlaying, audioRef)
  }
  return (
    <>
      <div
        onClick={selectSongHandler}
        className={`library-song ${song.active ? 'selected' : ''}`}
      >
        <img alt={song.name} src={song.cover}></img>
        <div className="song-description">
          <h3>{song.name}</h3>
          <h4>{song.artist}</h4>
        </div>
      </div>
    </>
  )
}

export default LibrarySongs
