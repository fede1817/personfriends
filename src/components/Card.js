import React from "react";

const Card = (props) => {
    const {name,email,id}=props;
    return (
        <div className={`tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5`}>
            <img src={`https://api.dicebear.com/7.x/croodles/svg?seed=${id}`} alt="person" width={200} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}


export default Card;