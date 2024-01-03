import React, { useContext, useEffect } from 'react'
import './Video.css'
import ThemeContext from '../context/ThemeContext'
import useVideoDispatch from '../hooks/useVideoDispatch'

function Video({
  title,
  channel = 'Coder Dost',
  views,
  time,
  id,
  verified = true,
  children,

  editVideo,
}) {
  const dispatch = useVideoDispatch()

  const theme = useContext(ThemeContext)

  // useEffect(() => {
  //   const idx = setInterval(() => {
  //     console.log('video playing', id)
  //   }, 3000)

  //   return () => {
  //     clearInterval(idx)
  //   }
  // }, [id])

  return (
    <>
      <div className={`container ${theme}`}>
        <button
          onClick={() => dispatch({ type: 'DELETE', payload: id })}
          className="close"
        >
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
