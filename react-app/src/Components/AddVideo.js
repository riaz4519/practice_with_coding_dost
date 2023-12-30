import { useEffect, useState } from 'react'
import './AddVideo.css'
import useVideoDispatch from '../hooks/useVideoDispatch'

const initialState = {
  time: '1 year ago',
  channel: 'Coder Dost',
  verified: true,
  title: '',
  views: '',
}

function AddVideo({ editableVideo }) {
  const [video, setVideo] = useState(initialState)
  const dispatch = useVideoDispatch()
  function handleSubmit(e) {
    e.stopPropagation()
    e.preventDefault()

    if (editableVideo) {
      dispatch({ type: 'UPDATE', payload: video })
    } else {
      dispatch({ type: 'ADD', payload: video })
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
