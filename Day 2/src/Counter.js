import React,{useState} from 'react'
import './Style.css'

const Counter=()=>{
    let [score,setScore] = useState(0)
    if(score>25)
    {
        alert('your score should not be more than 25') ;
    }
    return(
        <div>
            <h1> This is Counter App </h1> <br/>
            <h3> The Count is {score} </h3>
            <button onClick={()=>{setScore(score + 1)}}>Count</button>
            <button onClick={()=>{setScore(0)}}>Reset</button>
        </div>
    )
}


export default Counter