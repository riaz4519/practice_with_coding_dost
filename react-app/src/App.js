import './App.css'
import videoDB from './data/data'
import { useState } from 'react'
import AddVideo from './Components/AddVideo'
import VideoList from './Components/VideoList'

function App() {
  const [videos, setVideos] = useState(videoDB)
  const [editableVideo, setEditableVideo] = useState(null)

  function addVideos(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }])
  }

  function deleteVideo(id) {
    setVideos(videos.filter((v) => v.id !== id))
  }

  function editVideo(id) {
    setEditableVideo(videos.find((v) => v.id === id))
  }

  function updateVideo(video) {
    const index = videos.findIndex((v) => v.id === video.id)

    const newVideos = [...videos]

    newVideos.splice(index, 1, video)
    setVideos(newVideos)
    setEditableVideo(null)
  }

  return (
    <div className="App" onClick={() => console.log('App')}>
      <AddVideo
        addVideos={addVideos}
        updateVideo={updateVideo}
        editableVideo={editableVideo}
      ></AddVideo>
      <VideoList
        deleteVideo={deleteVideo}
        editVideo={editVideo}
        videos={videos}
      ></VideoList>
    </div>
  )
}

export default App
