import './Testmonial.css'
import { useState } from 'react'
import {AiOutlineCrown} from 'react-icons/ai'
import {BiRightArrow,BiLeftArrow} from 'react-icons/bi'
import download from '../Assests/download.jpg'


const Testmonials= [

    {
        id: 0,
       question: 'How is your age genneration',
        answer: 'dh uuufhe00000 how to do that in real world its going to be new era of new oppurtnties of new ages and new ways of dicovering',
        open:false,
        img: '..Assests/download.jpg'
    },

    {
        id: 1,
        question: 'How is your age genneration',
        answer: 'dh hhhfh1111e how to do that in real world its going to be new era of new oppurtnties of new ages and new ways of dicovering',
        open: false,
        img: '../Assests/test2.jpg'

    },

    {
        id: 2,
        question: 'How is your age genneration',
        answer: 'dh ffff222he how to do that in real world its going to be new era of new oppurtnties of new ages and new ways of dicovering',
        open: false,
        
        img: '../Assests/test3.jpg'



    },

    {
        id: 3,
        question: 'How is your age genneration',
        answer: 'dh ttttt333tfhe how to do that in real world its going to be new era of new oppurtnties of new ages and new ways of dicovering',
        open: false,
          
        img: '../Assests/test1.jpg'

        

    }
]



const Testmonial=()=>{

const [index, setindex]= useState(0)
const {question, answer,open, img}= Testmonials[index]
const Increase=()=>{
   
    setindex(prev=> prev+1)
    if(index>=3){
        setindex(0)}

}
const decrease=()=>{
    setindex(prev=> prev-1)
    if(index<=0){
        setindex(3)}
}


    return (

        <>
        <div className='containerr'> 
      
          <h2> <span> <AiOutlineCrown/> </span> Our Testimonial </h2></div>
        <div className='Testmonial-container'> 
  
        <div className='Testmonial'>
        <img src={download}/> 
         <h2> {question}</h2>
          <p> {answer}</p>
          <div className='button'> 
        <BiLeftArrow  onClick={Increase}> </BiLeftArrow>
        <BiRightArrow onClick={decrease}> </BiRightArrow>
        </div>
        </div>
        </div>
        </>
    )
}
export default Testmonial