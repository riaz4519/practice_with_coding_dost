import Video from './Components/Video'
import PlayButton from './Components/PlayButton'
import './App.css'
import videos from './data/data'

function App() {
  return (
    <div className="App" onClick={() => console.log("App")}>
      <div>Videos</div>
      {videos.map((video) => (
        <Video key={video.id} {...video}>
          {' '}
          <PlayButton
            onPlay={() => console.log('Play')}
            onPause={() => console.log('Pause')}

          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
      <div style={{ clear: 'both' }}>
        {/* <PlayButton onPlay={() => console.log('Play')} onPause={() => console.log("Pause")} message="play message">
          Play
        </PlayButton> */}
        {/* <PlayButton onSmash={() => alert('Pause')} message="pause message">
          Pause
        </PlayButton> */}
      </div>
    </div>
  )
}

export default App
