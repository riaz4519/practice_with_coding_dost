import { useContext, useState } from 'react'
import './PlayButton.css'
import ThemeContext from '../context/ThemeContext'

function PlayButton({ onPlay, onPause, children }) {
  
  const themeContext = useContext(ThemeContext)
 
  const [playing,setPlaying] = useState(false)

  function handleClick(e) {
    e.stopPropagation()

    if (playing) onPause()
    else onPlay()

   setPlaying(!playing)
  }

  return (
    <button className={`${themeContext}`} onClick={handleClick}>
      {children} {playing ? '||' : '|>'}
    </button>
  )
}

export default PlayButton
