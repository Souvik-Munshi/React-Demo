import React from 'react';
import Photo from './Photo';

function PhotoWall(props) {
    return <div className="photoGrid">
        {props.data.map((post, index) => <Photo key={index} data={post} onPhotoRemoval={props.onRemovePhoto}/>)}
    </div>
}

export default PhotoWall