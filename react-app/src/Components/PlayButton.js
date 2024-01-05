import { memo, useContext, useState } from 'react'
import './PlayButton.css'
import ThemeContext from '../context/ThemeContext'

const PlayButton = memo(function PlayButton({ onPlay, onPause, children }) {
  const themeContext = useContext(ThemeContext)

  const [playing, setPlaying] = useState(false)

  function handleClick(e) {
    e.stopPropagation()

    if (playing) onPause()
    else onPlay()

    setPlaying(!playing)
  }

  console.log("button")

  return (
    <button className={`${themeContext}`} onClick={handleClick}>
      {children} {playing ? '||' : '|>'}
    </button>
  )
})

export default PlayButton
