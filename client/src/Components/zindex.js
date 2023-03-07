import React from "react";

function Zidx () {
    return (
        <>
            <div className="page1">
                <h1 className="introLine">One touch of nature makes the whole world kin.</h1>
                <img src={require("../files/rubickscube.png")} style={{width: "100%", height: "auto"}} />
            </div>

            <div className="page2">
                <div className="loremTxt">The year 1951 saw extensive exploration of space by the United States and the Soviet Union using suborbital rockets. The Soviet Union launched their first series of biomedical tests to the Kármán line, the 100-kilometre (62 mi) boundary of space. Several American agencies launched more than a dozen scientific sounding rocket flights between them. In August 1951, the United States Navy launched Viking 7 (pictured), the seventh in the Viking series of sounding rockets since 1949, this time reaching a record-breaking altitude of 136 miles (219 km). Development also continued by both superpowers on rockets more powerful than the World War II–era German V-2 that had inaugurated the age of spaceflight.</div>

            </div>

        </>
    )
}
export default Zidx;