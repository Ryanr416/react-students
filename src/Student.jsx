import { useState } from 'react'
import './App.css'
import Score from './Score';



export default function Student(props) {
console.log(props.student);


return (
    <div>
    <div>Name: {props.student.name}</div>
    <div>Bio: {props.student.bio}</div>
    <div>Score: <Score scores={props.student.scores} /></div> 
    </div>

   


)}



