
import Card from "./UI/Card"
import './FAQ.css'

import { useState } from "react"
import FA from "./FA"
const FAQ=()=>{




    
const Questions= [

    {
        id: 0,
       question: 'How is your age genneration',
        answer: 'dh uuufhe how to do that in real world its going to be new era of new oppurtnties of new ages and new ways of dicovering',
        open:false
    },

    {
        id: 1,
        question: 'How is your age genneration',
        answer: 'dh hhhfhe how to do that in real world its going to be new era of new oppurtnties of new ages and new ways of dicovering',
        open: false

    },

    {
        id: 2,
        question: 'How is your age genneration',
        answer: 'dh ffffhe how to do that in real world its going to be new era of new oppurtnties of new ages and new ways of dicovering',
        open: false


    },

    {
        id: 3,
        question: 'How is your age genneration',
        answer: 'dh ttttttfhe how to do that in real world its going to be new era of new oppurtnties of new ages and new ways of dicovering',
        open: false
        

    }
]



             
    return(
        <> 
     <FA Ques={Questions}> </FA>
     
        </>
    )
}

export default FAQ