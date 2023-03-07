import React, {useState, useEffect } from "react"

function Landscape(props) {
    return (
        <>
            <div>
                <h2 style={{color: "black"}}>{props.name} </h2>
                <img src={require(`../files/${props.pic}.jpg`)} style={{ width: "auto", height: "50vh" }} />
                <div style={{color: "black"}}>{props.geolocation}</div>
            </div>
        </>
    )
}
export default Landscape;