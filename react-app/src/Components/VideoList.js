import PlayButton from './PlayButton'
import Video from './Video'

import useVideos from '../hooks/useVideos'

function VideoList({ editVideo }) {
  const videos = useVideos()
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
