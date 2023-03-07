import React,{ useState } from 'react';

function Mqrs() {
  let [val, setVal] = useState("")

  const aVal = val.toUpperCase();
  return (
    <>
      <h1> Media Querries </h1>
      <div>{aVal}</div>
      <input type="text" onChange={(e) => setVal(e.target.value)} />
    </>
  );
}

export default Mqrs;
