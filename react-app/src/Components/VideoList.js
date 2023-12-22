import PlayButton from "./PlayButton";
import Video from "./Video";

function VideoList({videos}){


    return (      
        <>
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
        </>
    )
        






}

export default VideoList;