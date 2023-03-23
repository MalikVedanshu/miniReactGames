import React, { useEffect, useState } from "react";

function tableVals() {
    let arr = []
    // let counter = 0;
    for (let i = 0; i < 10; i++) {
        arr[i] = [];
        for (let j = 0; j < 10; j++) {
            arr[i].push(Math.floor(Math.random() * 90 + 10));
        }
    }
    return arr;
}

function Home() {

    
    const myTable = tableVals();
    let winnerCells = Math.floor(Math.random() * 80 + 10);
    let activeCells = Math.floor(Math.random() * 80 + 10);
    
    const [winnerLoginc, setWinnerLoginc] = useState([winnerCells, winnerCells + 1, winnerCells + 2, winnerCells + 3]);
    const [currentActive, setCurrentActive] = useState([winnerCells, winnerCells + 1, winnerCells + 2, winnerCells + 3]);
    // useEffect(() => {
    //     let ballState = 7;
    //     let myInterval = setInterval(() => {
    //         if (ballState === 90) {
    //             clearInterval(myInterval);
    //             return;
    //         }
    //         console.log('rendered');
    //         ballState += 1;
    //         setBall(ballState);
    //     }, 1000);
    // },[])

    // {currentActive.includes(idx * 10 + idxx) ? "special" : "general"}

    



    return (
        <>
            <h1>Table</h1>

            <table>
                <tbody>
                    <tr>
                        {winnerLoginc.map((elem, indx) => (<td key={indx} className="special">{myTable[(elem - (elem % 10)) / 10][elem % 10]}</td>))}
                    </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                    {
                        myTable.map((rowz, idx) => (
                            <tr key={idx}>
                                {
                                    rowz.map((ele, idxx) => (
                                        <td key={idxx} id={ele} name={idx*10 + idxx} className={currentActive.includes(idx * 10 + idxx) ? "special" : "general"}>{ele}</td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
export default Home;