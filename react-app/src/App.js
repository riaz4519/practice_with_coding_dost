import Video from './Components/Video'

import './App.css'
import videos from './data/data'

function App() {
  return (
    <div className="App">
      <div>Videos</div>

      {videos.map((video) => (
        <Video key={video.id} {...video} />
      ))}
    </div>
  )
}

export default App
