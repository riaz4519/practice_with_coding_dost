import PlayButton from './PlayButton'
import Video from './Video'

import useVideos from '../hooks/useVideos'
import axios from 'axios'
import { useEffect, useState } from 'react'
import useVideoDispatch from '../hooks/useVideoDispatch'

function VideoList({ editVideo }) {
  const url = 'http://localhost:4000/videos'

  const videos = useVideos()
  const dispatch = useVideoDispatch()

  useEffect(() => {
    async function getVideos() {
      const res = await axios.get(url)
      dispatch({ type: 'LOAD', payload: res.data })
    }
    getVideos()
  }, [dispatch])

  return (
    <>
      {videos.map((video) => (
        <Video editVideo={editVideo} key={video.id} {...video}>
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
