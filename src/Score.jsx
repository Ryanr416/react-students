import { useState } from 'react'
import './App.css'




export default function Score(props) {
console.log(props.scores);


return (
    <div>
   {props.scores.map((Score, index) => (
        <div>

    <div>
    {Score.date}

    </div>


    <div>
        {Score.score}
    </div>


             </div> 
      ))} 
    </div>

   


)}

