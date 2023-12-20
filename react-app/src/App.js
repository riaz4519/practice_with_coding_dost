import Video from './Components/Video'
import PlayButton from './Components/PlayButton'
import './App.css'
import videos from './data/data'

function App() {
  return (
    <div className="App">
      <div>Videos</div>
      {videos.map((video) => (
        <Video key={video.id} {...video} />
      ))}
      <div style={{ clear: 'both' }}>
        <PlayButton message="play message">Play</PlayButton>
        <PlayButton message="pause message">Pause</PlayButton>
      </div>
    </div>
  )
}

export default App
