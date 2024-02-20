import React from "react";


function Card({id, name, email}){

    return(
        <div className="tc grow bg-light-blue br3 pa3 ma2 dib bw2 shadow-5">
            <img src={"https://robohash.org/"+id+"?size=400x400"} alt={name} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;