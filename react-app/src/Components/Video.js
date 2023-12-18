import React from 'react'
import './Video.css'

function Video({ title, channel, views, time,thumb }) {
  return (
    <>
      <div className="container">
        <div className="pic">
          <img src={thumb} alt="Katherine Johnson" />
        </div>

        <div className="title">{title}</div>
        <div className="channel">{channel}</div>
        <div className="views">
          {views} views <span>.</span>
          {time}
        </div>
      </div>
    </>
  )
}

export default Video
