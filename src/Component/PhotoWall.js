import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


function PhotoWall(props) {
    return <div>
        <Link className="addIcon" to="/AddPhoto">Add New Image</Link>
        <div className="photoGrid">
            {props.posts.map((post, index) => <Photo key={index} data={post} {...props} index={index}/>)}
        </div>
    </div>
}

PhotoWall.prototype = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default PhotoWall