import React, {Component} from 'react';

class AddPhoto extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit(event) {
        event.preventDefault();
        const link = event.target.elements.link.value;
        const Desc = event.target.elements.description.value;
        const postBody = {
            id: 0,
            description: Desc,
            imageLink: link
        }
        if (link && Desc) {
            this.props.onAddPhoto(postBody);
            this.props.history.push("/");
        }
    }

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <h2>ADD Photo</h2>
                    <input type="Link" placeholder="Link" name="link"/>
                    <input type="Description" placeholder="Description" name="description"/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddPhoto