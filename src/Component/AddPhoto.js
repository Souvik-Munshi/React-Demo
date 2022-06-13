import React from 'react';

function AddPhoto(props) {
    return (
        <div>
            <form className="form" onSubmit={event => handleSubmit(event,props)}>
                <h2>ADD Photo</h2>
                <input type="Link" placeholder="Link" name="link"/>
                <input type="Description" placeholder="Description" name="description"/>
                <button>Submit</button>
            </form>
        </div>
    )
}

function handleSubmit(event, props) {
    event.preventDefault();
    const link = event.target.elements.link.value;
    const Desc = event.target.elements.description.value;
    const postBody = {
        id: 0,
        description: Desc,
        imageLink: link
    }
    if (link && Desc) {
        props.onAddPhoto(postBody);
        props.history.back();
    }
}

export default AddPhoto