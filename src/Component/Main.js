import React, {Component} from 'react';
import Title from "./Title";
import PhotoWall from "./PhotoWall";
import {Routes, Route} from "react-router-dom";
import {createBrowserHistory} from 'history';
import AddPhoto from "./AddPhoto";

export class Main extends Component {
    history = createBrowserHistory();

    constructor() {
        super();
        this.state = {
            posts: []
        }
        this.removePhoto = this.removePhoto.bind(this);
        this.addPhoto = this.addPhoto.bind(this);

    }

    FetchData() {
        return [{
            id: "0",
            description: "beautiful landscape",
            imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
                "3919321_1443393332_n.jpg"
        }, {
            id: "1",
            description: "Aliens???",
            imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg"
        }, {
            id: "2",
            description: "On a vacation!",
            imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
        }]
    }

    addPhoto(submittedPhoto) {
        this.setState(state => ({
            posts: state.posts.concat([submittedPhoto])
        }))

    }


    removePhoto(removePhoto) {
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== removePhoto)
        }))
    }

    componentDidMount() {
        let data = this.FetchData();
        this.setState({
            posts: data
        })
    }

    render() {
        return <div>
            <Title heading={"Photo Wall"}/>
            <Routes>
                <Route path="/" element={<PhotoWall data={this.state.posts} onRemovePhoto={this.removePhoto}/>}/>
                <Route path="/AddPhoto" element={<AddPhoto onAddPhoto={this.addPhoto} history={this.history}/>}/>
            </Routes>

        </div>
    }


}