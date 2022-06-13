import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


function PhotoWall(props) {
    return <div>
        <Link className="addIcon" to="/AddPhoto" >Add New Image</Link>
        <div className="photoGrid">
            {props.data.map((post, index) => <Photo key={index} data={post} onPhotoRemoval={props.onRemovePhoto}/>)}
        </div>
    </div>
}

PhotoWall.prototype = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default PhotoWall