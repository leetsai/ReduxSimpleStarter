import React from 'react';
import VideoListItem from './video_list_item';

// Just a plain functional component
// add className to help add styling
// receiving from App props, which is an array of videos
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem
      onVideoSelect={props.onVideoSelect}
      key={video.etag} video={video} />
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
