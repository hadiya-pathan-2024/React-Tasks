import { useState } from "react";
import { memo } from "react";
const First =({count})=>{
    let [color,setColor] = useState("olive");
    
    return(
        <>
        <div key={count}>
        <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
                    <button key={color} onClick={() => {setColor("red")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
                    <button onClick={() => {setColor("green")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>Green</button>
                    <button onClick={() => {setColor("blue")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}>Blue</button>
                    <button onClick={() => {setColor("black")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "black"}}>Black</button>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}   

export default memo(First,(prevProps,nextProps)=>{
    return true
})

// export default First