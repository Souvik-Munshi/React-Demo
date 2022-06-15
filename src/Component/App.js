import {connect} from "react-redux";
import {Main} from "./Main";
import {bindActionCreators} from "redux";
import {addPost, removePost} from "../Redux/Actions";

function mapStateToProps(state) {
    return {
        posts: state
    }
}

function mapDispatchToProp(dispatch) {
    return bindActionCreators({removePost, addPost}, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProp)(Main)

export default App