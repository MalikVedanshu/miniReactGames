import React,{useState} from "react";
import Landscape from "./propEl.js";


function AllLandscapes() {
    const [propVals, setPropVals] = useState([
            ["Southern Mountains", 1, "228, 4847"],
            ["Northern Mountains", 2, "500, -200"],
            ["CentralMountains", 3, "-488, -93849"]
        ])
    const [activeVals, setActiveVals] = useState(0)
    const onNextSelect = () => {
        if(activeVals >= 2){
            setActiveVals(0)
        } else {
            setActiveVals(prev => prev+=1);
        }
    }
    return (
        <>
            <h1>Landscape </h1>
            <Landscape name={`${propVals[activeVals][0]}`} pic={propVals[activeVals][1]} geolocation={propVals[activeVals][2]} />
            <input type="button" value="Next" onClick={onNextSelect} />
        </>
    )
}
export default AllLandscapes;