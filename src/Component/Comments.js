import React from 'react';

export function Comments(props) {
    return (<div className="comments">
        {
            props.comments.map((comment, index) => {
                return(
                    <p key={index}> {comment}</p>
                )
            })
        }
        <form className="comment-form" onSubmit={event => handleSubmit(event,props)}>
            <input type="test" placeholder="comments" name="comment"/>
            <input type="submit"/>
        </form>
    </div>)
}

function handleSubmit(event, props){
    event.preventDefault();
    const comment = event.target.elements.comment.value
    props.addComment(comment, props.id)
}