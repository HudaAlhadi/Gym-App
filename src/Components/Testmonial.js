import './Testmonial.css'
import { useState } from 'react'
import {AiOutlineCrown} from 'react-icons/ai'
import {BiRightArrow,BiLeftArrow} from 'react-icons/bi'
import download from '../Assests/download.jpg'


const Testmonials= [

    {
        id: 0,
       question: 'John D.',
        answer: 'Joining this fitness community has been life-changing. The trainers are incredibly knowledgeable and supportive, and the environment is so motivating',
      
        img: '..Assests/download.jpg'
    },

    {
        id: 1,
        question: 'Sarah M.',
        answer: 'I love the variety of classes offered. Theres something for everyone, and the instructors make each session fun and challenging, I have seen amazing results and made great friends along the way',
        
        img: '../Assests/test2.jpg'

    },

    {
        id: 2,
        question: 'Alex P.',
        answer: 'The personalized approach really sets this gym apart. My trainer took the time to understand my goals and created a plan that worked perfectly for me. The progress I have made is incredible.',
        open: false,
        
        img: '../Assests/test3.jpg'



    },

    {
        id: 3,
        question: 'Emily R',
        answer: 'The online training program is fantastic! It’s convenient and flexible, allowing me to work out from home with professional guidance. I highly recommend it to anyone with a busy schedule',
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