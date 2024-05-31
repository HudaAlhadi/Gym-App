import Gym from '../Assests/Gym.jpg'
import './section.css'
import Cart from './UI/Cart'
import {MdOutlineCardMembership} from 'react-icons/md'
import {AiOutlineCrown} from 'react-icons/ai'
import {LiaCrownSolid} from 'react-icons/lia'

const Values=()=>{
    const elements= [

        {
            id: 5,
            header: 'Value one',
            des: 'dh fhe how to do that in real world '
        },
    
        {
            id: 4,
            header: 'Value tow',
            des: 'dh fhe how to do that in real world '
    
        },
    
        {
            id: 3,
            header: 'Value three',
            des: 'dh fhe how to do that in real world '
    ,
    
        },
    
        {
            id: 2,
            header: 'Value four',
            des: 'dh fhe how to do that in real world '
    
        }
    ]
    const values= elements.map((item)=>{
        return ( 
            <Cart> 
    
    <li className='element' key={item.id}> <span> <MdOutlineCardMembership className='icon'/> </span> <h3>{item.header}</h3>
    <p> {item.des
    }</p> <button> Learn More </button> </li></Cart> 
        )      
    })

    return(
        <>
        <div className='sec-wrapper'> 
       
        <div className='section-container'> 
       <div className='gym-image-container'>
<img src={Gym} /> 
</div>
<div className='rightsec-cotainer'> 
<div className='right-header'> 
<h2> <span> <LiaCrownSolid> </LiaCrownSolid></span>Our values </h2>
<p> hye d yrf hf f5yrh fh5fb hfd fhc c5hf  frcv5 fcrv 5gfc5vf gfcvgrc </p>
</div>
<div className='right-sec'>
    {values}
       </div>
</div>

        </div>
        </div>
        </>
    )
}

export default Values