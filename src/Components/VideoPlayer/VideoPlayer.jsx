import React from 'react'
import "./VideoPlayer.css"
import clg_video from "../../assets/clg.mp4"

const VideoPlayer = () => {
  return (
    <div className='videoPlayer'>
      <video src={clg_video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer
