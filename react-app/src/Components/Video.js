import React from 'react'
import './Video.css'

function Video({
  title,
  channel = 'Coder Dost',
  views,
  time,
  id,
  verified = true,
  children,
  deleteVideo,
  editVideo,
}) {
  return (
    <>
      <div className="container">
        <button onClick={() => deleteVideo(id)} className="close">
          X
        </button>
        <button onClick={() => editVideo(id)} className="edit">
          Edit
        </button>
        <div className="pic">
          <img
            src={`https://picsum.photos/id/${id}/100/100`}
            alt="Katherine Johnson"
          />
        </div>

        <div className="title">{title}</div>
        <div className="channel">
          {channel} {verified && '✅'}
        </div>

        <div className="views">
          {views} views <span>.</span>
          {time}
        </div>
        <div>{children}</div>
      </div>
    </>
  )
}

export default Video
