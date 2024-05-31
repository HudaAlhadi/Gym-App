import Card from "./UI/Card"
import { useState } from "react"
import './FA.css'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineCrown} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'
const FA=({Ques})=>{

const [active, setactive]= useState(false)
const [act, setact]= useState()

const toggle=(i)=>{
 setactive(!active)
  togglee(i)
}
const togglee=(i)=>{
    setact(i)
}
    return( 
        <>
       <div onMouseEnter={()=>{
                setactive(false)
               }}   className="section-wrapperr"> 
                <h2> <span> <AiOutlineCrown/> </span> Our Testimonial </h2>
        <div  className="section-wrapper"> 
        {Ques.map(( Q,i )=>{
            
return (
            <div className="card-container">
                <div className="card">
                    
                    <div className="plus" onClick={toggle.bind(null,i)}> 
                <h2> {Q.question}</h2> <span> {active&& act===i?<AiOutlineMinus/>:<AiOutlinePlus/> }</span></div>
                   <p className={act===i&& active? 'open': 'close'}>{Q.answer}</p> 
                   </div>
                     </div>
                      )
        })}
        </div>
        </div>
        </>
    )
} 

export default FA