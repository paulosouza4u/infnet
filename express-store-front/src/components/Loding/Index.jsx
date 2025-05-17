import React from "react";

const Loading = (props) => {

    return (
        <div className={(props.active ? "d-block " : "d-none ") + "rounded " + props.className}>
            <div className="d-flex align-items-center justify-content-center alert alert-info" role="alert">
                Loading... <div className="spinner-border text-info ms-2" role="status"></div>
            </div>
        </div>
    );
}

export default Loading;