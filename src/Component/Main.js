import React, {Component} from 'react';
import Title from "./Title";
import {createBrowserHistory} from 'history';
import {Link, Route, Routes} from "react-router-dom";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import {Single} from "./Single";


export class Main extends Component {
    history = createBrowserHistory();

    render() {
        return <div>
            <Link to="/"><Title heading={"Photo Wall"}/></Link>
            <Routes>
                <Route exact path="/" element={<PhotoWall {...this.props} />}/>
                <Route path="/AddPhoto" element={<AddPhoto {...this.props} history={this.history}/>}/>
                <Route exact path="/single/:id" element={<Single {...this.props} history={this.history}/>}/>
            </Routes>
        </div>
    }


}