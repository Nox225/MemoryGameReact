import React from "react";
import mandala from '../images/mandala1.jpg'

function Tile({item, id, handleClick}){
    const itemClass = item.stat ? " is-flipped" : ""

    return(
        <>
            <div className="scene">
                <div className={"card" + itemClass} onClick={() => handleClick(id)}>
                    <img className="card__face card__face--front" src={mandala} alt=""></img>
                    <img className="card__face card__face--back" src={item.img} alt=""></img>
                </div>
            </div>        
        </>
    )
}
export default Tile