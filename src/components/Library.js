import LibrarySongs from './LibrarySongs'

function Library({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) {
  return (
    <>
      <div
        className={`library-container ${libraryStatus ? 'active-library' : ''}`}
      >
        <h1>Library</h1>
        {songs.map((song) => (
          <LibrarySongs
            key={song.id}
            id={song.id}
            song={song}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
            songs={songs}
            setSongs={setSongs}
          />
        ))}
      </div>
    </>
  )
}

export default Library
