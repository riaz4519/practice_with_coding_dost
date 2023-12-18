import Video from './Components/Video'

import './App.css'

function App() {
  return (
    <div className="App">
      <div>Videos</div>
      <Video
        title="React Js Tutorial"
        views="10k"
        time="1 year ago"
        channel="Coder Dost"
        thumb="https://placehold.co/100"
      />
      <Video
        title="Node Js Tutorial"
        views="100k"
        time="1 month ago"
        channel="Coder Dost"
        thumb="https://placehold.co/100"
      />
      <Video
        title="MongoDB Tutorial"
        views="100k"
        time="1 month ago"
        channel="Coder Dost"
        thumb="https://placehold.co/100"
      />
    </div>
  )
}

export default App
