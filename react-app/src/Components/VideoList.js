import { useContext } from 'react'
import PlayButton from './PlayButton'
import Video from './Video'
import VideosContext from '../context/VideosContext'

function VideoList({ dispatch, editVideo }) {
  const videos = useContext(VideosContext)
  return (
    <>
      {videos.map((video) => (
        <Video
          dispatch={dispatch}
          editVideo={editVideo}
          key={video.id}
          {...video}
        >
          <PlayButton
            onPlay={() => console.log('Play')}
            onPause={() => console.log('Pause')}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
    </>
  )
}

export default VideoList
