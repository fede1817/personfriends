import React from "react";

const SeachBox = ({searchfield, searchChange})=>{
    return(
        <div className="pa2">
          <input className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="Ingrese un nombre." onChange={searchChange} />  
        </div>
    );
}

export default SeachBox;