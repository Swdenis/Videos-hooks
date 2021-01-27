import React from 'react';
import Spinner from './Spinner';

const VideoDetail = ({video}) => {
    if(!video) {
        return (<div><Spinner message="Loading"/></div>);
    }

    const videoSrc= `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
    <div className="ui segment">
        <div className="ui embed">
            <iframe 
            title="video player"
            src={videoSrc}/>
        </div>
        <h4 className="ui header">
        {video.snippet.title}
        </h4>
        <p>
        {video.snippet.description}
        </p>
    </div>
    )
};

export default VideoDetail;