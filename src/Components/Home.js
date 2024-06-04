import './Home.css'
import { useEffect } from 'react'
import Cart from './UI/Cart'
import 
{MdOutlineCardMembership} from 'react-icons/md'
import {AiOutlineCrown} from 'react-icons/ai'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Header from './Header'
import Testmonial from './Testmonial'
import section from './section'
import FAQ from'./FAQ'
import Section from './section'
const Home=()=>{

    useEffect(()=>{

Aos.init({duration:2000})
    },[])

const elements= [

    {
        id: 5,
        header: 'Personal Training:',
        des: 'Receive one-on-one coaching tailored to your specific fitness goals.  '
    },

    {
        id: 4,
        header: 'Group Fitness Classes:',
        des: 'Join our dynamic and motivating group fitness classes. '

    },

    {
        id: 3,
        header: 'Nutrition Coaching:',
        des: 'Achieve a balanced and healthy lifestyle with our nutrition coaching  '
,

    },

    {
        id: 2,
        header: 'Online Training Programs',
        des: 'Access our fitness programs from anywhere with our online training '

    }
]
const Programs=  elements.map((item)=>{
    return ( 
        <Cart> 
          <li className='element' key={item.id}> <span> <MdOutlineCardMembership className='icon'/> </span> <h3>{item.header}</h3>
        <p> {item.des}</p> <button className='btn'> Learn More </button> </li></Cart> 
    )      
       })

    return ( 
     
        <> 
         
       <Header/> 
        <div className='programs-container'>
        <h2> <span> <AiOutlineCrown/> </span> Our Programs  </h2>
        <ul data-aos='fade-up' data-aos-duration= '1000' className='elements' >
       {Programs} </ul> </div>
            <Section/>
            <FAQ/>
            <Testmonial/> 
          
            </>
    )
}

export default Home