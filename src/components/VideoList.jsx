import VideoListEntry from './VideoListEntry.js';

// Should take in exampleVideoData as a prop!!
var VideoList = ({videos, handleClick}) => (
  <div className="video-list">
    {videos.map((video) => <VideoListEntry video={video} handleClick={handleClick}/>)}
  </div>
);

VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

export default VideoList;
