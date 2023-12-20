import './PlayButton.css'

function PlayButton({ onPlay, onPause, children }) {
  let playing = false

  function handleClick(e) {
    e.stopPropagation()

    if (playing) onPause()
    else onPlay()

    playing = !playing
  }

  return (
    <button onClick={handleClick}>
      {children} {playing ? '>' : '||'}
    </button>
  )
}

export default PlayButton
