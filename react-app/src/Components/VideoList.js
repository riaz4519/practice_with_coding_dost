import PlayButton from './PlayButton'
import Video from './Video'

function VideoList({ videos, dispatch, editVideo }) {
  return (
    <>
      {videos.map((video) => (
        <Video
          dispatch={dispatch}
          editVideo={editVideo}
          key={video.id}
          {...video}
        >
          {' '}
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
