import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Player({
  currentSong,
  isPlaying,
  setisPlaying,
  audioRef,
  songs,
  setCurrentSong,
  setSongs,
}) {
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  })
  const activeLibraryHandler = (nextPrev) => {
    const newSongs = songs.map((song) => {
      if (song.id === nextPrev.id) {
        return { ...song, active: true }
      } else {
        return { ...song, active: false }
      }
    })
    setSongs(newSongs)
  }

  const playAudioHandler = () => {
    if (isPlaying) {
      audioRef.current.pause()
      setisPlaying(!isPlaying)
    } else {
      audioRef.current.play()
      setisPlaying(!isPlaying)
    }
  }

  const updateTimeHandler = (e) => {
    const current = e.target.currentTime
    const durationTime = e.target.duration
    setSongInfo({ ...songInfo, currentTime: current, duration: durationTime })
  }

  const dragHandler = (e) => {
    // console.log(e.target.value)
    audioRef.current.currentTime = e.target.value
    setSongInfo({ ...songInfo, currentTime: e.target.value })
  }

  const getTime = (time) => {
    return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
  }

  const skipHandler = async (direction) => {
    const currentIndex = songs.findIndex((song) => {
      return song.id === currentSong.id
    })
    if (direction === 'skip-forward') {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length])
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length])
    }
    if (direction === 'skip-back') {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1])
        activeLibraryHandler(songs[songs.length - 1])
        if (isPlaying) audioRef.current.play()
        return
      }
      await setCurrentSong(songs[(currentIndex - 1) % songs.length])
      activeLibraryHandler(songs[(currentIndex - 1) % songs.length])
    }
    if (isPlaying) {
      audioRef.current.play()
    }
    // console.log(currentIndex)
  }

  const skipSongHandler = () => {
    const currentIndex = songs.findIndex((song) => {
      return song.id === currentSong.id
    })
    setCurrentSong(songs[(currentIndex + 1) % songs.length])
    setTimeout(() => {
      // playAudio(isPlaying, audioRef)
      audioRef.current.play()
    }, 100)
  }
  return (
    <>
      <div className="player">
        <div className="time-control">
          <p>{getTime(songInfo.currentTime)}</p>
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
            type="range"
          ></input>

          <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
        </div>
        <div className="player-control">
          <FontAwesomeIcon
            onClick={() => skipHandler('skip-back')}
            className="skip-backward"
            size="2x"
            icon={faAngleLeft}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            onClick={playAudioHandler}
            className="play"
            size="2x"
            icon={isPlaying ? faPause : faPlay}
          ></FontAwesomeIcon>

          <FontAwesomeIcon
            onClick={() => skipHandler('skip-forward')}
            className="skip-forward"
            size="2x"
            icon={faAngleRight}
          ></FontAwesomeIcon>
        </div>
        <audio
          onLoadedMetadata={updateTimeHandler}
          onTimeUpdate={updateTimeHandler}
          ref={audioRef}
          src={currentSong.audio}
          onEnded={skipSongHandler}
        ></audio>
      </div>
    </>
  )
}

export default Player
