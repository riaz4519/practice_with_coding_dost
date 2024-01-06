import PlayButton from './PlayButton'
import Video from './Video'

import useVideos from '../hooks/useVideos'
import axios from 'axios'
import {
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useState,
} from 'react'
import useVideoDispatch from '../hooks/useVideoDispatch'

function VideoList({ editVideo }) {
  const url = 'http://localhost:4000/videos'

  const videos = useVideos()
  const dispatch = useVideoDispatch()

  const defVideos = useDeferredValue(videos)

  useEffect(() => {
    async function getVideos() {
      const res = await axios.get(url)
      dispatch({ type: 'LOAD', payload: res.data })
    }
    getVideos()
  }, [dispatch])

  const play = useCallback(() => console.log('Play'), [])
  const pause = useCallback(() => console.log('pause'), [])

  const memoPlayButton = useMemo(
    () => (
      <PlayButton onPlay={play} onPause={pause}>
        Play
      </PlayButton>
    ),
    [pause, play]
  )

  return (
    <>
      {defVideos.map((video) => (
        <Video editVideo={editVideo} key={video.id} {...video}>
          {memoPlayButton}
        </Video>
      ))}
    </>
  )
}

export default VideoList
