import {connect} from "react-redux";
import {Main} from "./Main";
import {bindActionCreators} from "redux";
import {addComment, addPost, removePost} from "../Redux/Actions";

function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments : state.comments
    }
}

function mapDispatchToProp(dispatch) {
    return bindActionCreators({removePost, addPost, addComment}, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProp)(Main)

export default App