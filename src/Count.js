import {React, useMemo, useState} from "react";
import BgChange from "./BgChange"
import First from "./BgChange";
// function Count(){
    //     setCount(count + 1);
    function Count(){
        let [count,setCount] = useState(0);
        // const comp = useMemo(()=><BgChange count={count}  />,[])---useMemo
   return(
        <div>
            <div key={count}>
            <h1>count {count}</h1>
            <button onClick={()=>setCount(count+1)}>Add Value</button>
            </div>
            <BgChange count={count}/>
        </div>
    )
}

export default Count