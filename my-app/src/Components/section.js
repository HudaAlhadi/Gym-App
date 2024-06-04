import Gym from '../Assests/Gym.jpg'
import './section.css'
import Fit5 from '../Assests/Fit5.jpg'
import Cart from './UI/Cart'
import {MdOutlineCardMembership} from 'react-icons/md'
import {AiOutlineCrown} from 'react-icons/ai'
import {LiaCrownSolid} from 'react-icons/lia'

const Values=()=>{
    const elements= [

        {
            id: 5,
            header: 'Commitment to Excellence',
            des: 'We strive to provide the highest quality fitness services and experiences. Our team is dedicated to continuous improvement, ensuring you receive the best guidance and support.'
        },
    
        {
            id: 4,
            header: 'Community and Support',
            des: 'We believe in building a strong, supportive community where everyone feels welcome. Our environment encourages camaraderie and mutual encouragement to help you reach your fitness goals '
    
        },
    
        {
            id: 3,
            header: 'Personalized Approach:',
            des: 'Every individual is unique, and so are their fitness needs. We tailor our programs to suit your specific goals, preferences, and fitness levels to maximize your results'
    
    
        },
    
        {
            id: 2,
            header: 'Integrity and Transparency',
            des: 'We operate with honesty and transparency in all our dealings. Our pricing, programs, and progress tracking are clear and straightforward, ensuring you always know what to expect.'
    
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
<img src={Fit5} /> 
</div>
<div className='rightsec-cotainer'> 
<div className='right-header'> 
<h2> <span> <LiaCrownSolid> </LiaCrownSolid></span>Our values </h2>

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