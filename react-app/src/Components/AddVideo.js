import { useEffect, useState } from 'react'
import './AddVideo.css'

const initialState = {
  time: '1 year ago',
  channel: 'Coder Dost',
  verified: true,
  title: '',
  views: '',
}

function AddVideo({editableVideo,dispatch }) {
  const [video, setVideo] = useState(initialState)

  function handleSubmit(e) {
    e.stopPropagation()
    e.preventDefault()

    if (editableVideo) {
      dispatch({ type: 'ADD', payload: video })
    } else {
      dispatch({ type: 'UPDATE', payload: video })
    }

    setVideo(initialState)
  }
  function handleChange(e) {
    e.stopPropagation()

    setVideo({
      ...video,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
    if (editableVideo) {
      setVideo(editableVideo)
    }
  }, [editableVideo])

  return (
    <form>
      <input
        name="title"
        type="text"
        onChange={handleChange}
        placeholder="title"
        value={video.title}
      />
      <input
        name="views"
        type="text"
        onChange={handleChange}
        placeholder="views"
        value={video.views}
      />
      <button onClick={handleSubmit}>
        {editableVideo ? 'edit' : 'Add'} Video
      </button>
    </form>
  )
}

export default AddVideo
