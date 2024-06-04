
import Card from "./UI/Card"
import './FAQ.css'

import { useState } from "react"
import FA from "./FA"
const FAQ=()=>{




    
const Questions= [

    {
        id: 0,
       question: 'What should I bring to my first training session?',
        answer: 'Wear comfortable workout clothes, bring a water bottle, and a towel. If you have any medical conditions or injuries, please inform your trainer beforehand.',
       
    },

    {
        id: 1,
        question: 'How often should I work out to see results?',
        answer: 'It depends on your goals and current fitness level. Generally, we recommend at least 3-4 times a week, but your trainer can create a personalized plan that suits your needs.',
        

    },

    {
        id: 2,
        question: 'Are your programs suitable for beginners?',
        answer: 'Absolutely! Our programs are designed for all fitness levels. Our trainers will work with you to create a plan that matches your experience and goals.',
      


    },

    {
        id: 3,
        question: 'Do you offer nutritional guidance?',
        answer: 'Yes, we offer comprehensive nutrition coaching to complement your fitness program. Our experts will help you create a balanced diet plan to support your fitness journey.',
        

    }
]



             
    return(
        <> 
     <FA Ques={Questions}> </FA>
     
        </>
    )
}

export default FAQ