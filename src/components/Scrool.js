import React from "react";
function Scrool (props) {
    const de = props.children;
    return(
        <div style={{overflowY: "scroll", border: "1px solid black", height: "800px"}}>
            {de}
        </div>
    );
}

export default Scrool;