import './App.css'
import videoDB from './data/data'
import { useCallback, useReducer, useState } from 'react'
import AddVideo from './Components/AddVideo'
import VideoList from './Components/VideoList'
import ThemeContext from './context/ThemeContext'
import VideosContext from './context/VideosContext'
import VideoDispatchContext from './context/VideoDispatchContext'
import Counter from './Components/Counter'
import { act } from 'react-dom/test-utils'

function App() {
  const [editableVideo, setEditableVideo] = useState(null)
  const [mode, setMode] = useState('darkMode')

  function videoReducer(videos, action) {
    switch (action.type) {
      case 'LOAD':
        return action.payload
      case 'ADD':
        return [...videos, { ...action.payload, id: videos.length + 1 }]

      case 'DELETE':
        return videos.filter((v) => v.id !== action.payload)

      case 'UPDATE':
        const index = videos.findIndex((v) => v.id === action.payload.id)

        const newVideos = [...videos]

        newVideos.splice(index, 1, action.payload)
        setEditableVideo(null)

        return newVideos

      default:
        return videos
    }
  }

  const [videos, dispatch] = useReducer(videoReducer, [])

  const editVideo = useCallback(
    function editVideo(id) {
      setEditableVideo(videos.find((v) => v.id === id))
    },
    [videos]
  )

  return (
    <ThemeContext.Provider value={mode}>
      <VideosContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>
          <div className={`App ${mode}`} onClick={() => console.log('App')}>
            <Counter></Counter>
            <button
              onClick={() => {
                setMode(mode === 'lightMode' ? 'darkMode' : 'lightMode')
              }}
            >
              Mode
            </button>
            <AddVideo editableVideo={editableVideo}></AddVideo>
            <VideoList editVideo={editVideo}></VideoList>
          </div>
        </VideoDispatchContext.Provider>
      </VideosContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
