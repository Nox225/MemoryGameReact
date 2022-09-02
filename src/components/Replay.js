import React from "react";

function Replay({tries}){
    return(
        <>
            <div className="replay-container">
                <h2 className="summary">{`It took you ${tries} tries!`}</h2>
                <button className="replay-button" onClick={() => window.location.reload()}>Replay</button>
            </div>
        </>
    )
}
export default Replay