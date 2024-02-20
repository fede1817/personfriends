import React from "react";
import Card from "./Card";


function CardList ({robots}) {
    const cardcomponet = robots.map( (user, i) => {
        return <Card key={i} id={user.id} name={user.name} email={user.email}/>
    });

    return(
        <div>
           {cardcomponet} 
        </div>
    );
}

export default CardList;