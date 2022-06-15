import React from 'react';
import PropTypes from "prop-types";

function Photo(props) {
    let post = props.data;
    return <figure className="figure">
        <img className="photo" src={post.imageLink} alt={post.description}/>
        <figcaption><p>{post.description}</p></figcaption>
        <div className="button-container">
            <button onClick={()=>{
                props.removePost(props.index)
            }}>Remove</button>
        </div>
    </figure>
}

Photo.prototype = {
    data: PropTypes.object.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default Photo