import React from 'react';
import {useParams} from "react-router-dom";
import Photo from "./Photo";
import {Comments} from "./Comments";

export function Single(props) {
    let id = useParams().id;
    let post = props.posts.find((post) => post.id == id);
    let index = props.posts.findIndex((post) => post.id == id );
    if(index == -1){
        return props.history.back()
    }else {
        return (<div className='single-photo'>
            <Photo data={post} {...props} index={index} history={props.history}/>
            <Comments addComment={props.addComment} comments={props.comments[id] || []} id={id}/>
        </div>)
    }
}

