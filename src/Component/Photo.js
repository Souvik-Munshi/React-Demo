import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Photo(props) {
    let post = props.data;
    return <figure className="figure">
        <Link to={`/single/${post.id}`}><img className="photo" src={post.imageLink} alt={post.description}/></Link>
        <figcaption><p>{post.description}</p></figcaption>
        <div className="button-container">
            <button onClick={(event) => {
                event.preventDefault();
                props.removePost(props.index);
            }}>Remove
            </button>
            <button classname="button" to={`/single/${post.id}`}>
                <div className="comment-count">
                    <div className="speech-bubble"></div>
                    {props.comments[post.id] ? props.comments[post.id].length : 0 }
                </div>
            </button>
        </div>
    </figure>
}

Photo.prototype = {
    data: PropTypes.object.isRequired, onRemovePhoto: PropTypes.func.isRequired
}

export default Photo