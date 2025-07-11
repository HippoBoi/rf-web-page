import gameplay from "../assets/rf-gameplay.mp4";

const VideoComponent = () => {
  return (
    <div className="video_wrap">
        <div className="side-rect left"></div>
        <div className="side-rect right"></div>
        <div className="vert-rect up"></div>
        <div className="vert-rect down"></div>
        <video src={gameplay} autoPlay muted loop></video>
    </div>
  )
}

export default VideoComponent;