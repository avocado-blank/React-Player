import Player from './components/Player'
import Song from './components/Song'
import './styles/app.scss'
import data from './music'
import { useState, useRef } from 'react'
import Library from './components/Library'
import Navbar from './components/Navbar'
function App() {
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setisPlaying] = useState(false)
  const [libraryStatus, setLibraryStatus] = useState(false)
  const audioRef = useRef(null)
  return (
    <div className="App">
      <Navbar
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      />
      <Song currentSong={currentSong}></Song>
      <Player
        audioRef={audioRef}
        isPlaying={isPlaying}
        setisPlaying={setisPlaying}
        currentSong={currentSong}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      ></Player>
      <Library
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
    </div>
  )
}

export default App
