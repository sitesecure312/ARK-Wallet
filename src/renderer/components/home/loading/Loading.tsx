import React from "react";
import LoadingIcon from '-!react-svg-loader!../../../assets/icons/loadingIcon.svg'
import './loading.css';

class Loading extends React.Component {

    render() {
        return (
            <div id="loading_icon">
                <LoadingIcon />
                <p>Loading</p>
            </div>
        );
    }
}

export default Loading;
