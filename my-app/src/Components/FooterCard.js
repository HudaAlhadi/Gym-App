import './FooterCard.css'
import  {BsCheck2Circle} from 'react-icons/bs'
import {ImMobile} from 'react-icons/im'
import {TbTargetArrow} from 'react-icons/tb'
import {HiArrowNarrowRight} from 'react-icons/hi'
const FooterCard=()=>{


    return(

        <> 
       
        <div className="footercard"> 
        <div className='header'> 
        <h2> How It <span> Works</span></h2>
        </div>
        <div className='svg-wrapper'> 
            <div className='svg-container'> 
           <ImMobile></ImMobile>
           <h2> Sign Up in Seconds</h2>
           <p> Open the App and Tap on the app icon to open it.Then press on sign up button </p>
           </div> 
           <div className='svv'>
       <HiArrowNarrowRight></HiArrowNarrowRight>
       </div> 
           <div className='svg-container'> 
            <BsCheck2Circle> </BsCheck2Circle>
            <h2> Download the Mobile App</h2>
            <p> Tap the Download or Install button.
Wait for the app to download and install on your device.</p>
            </div> 
            <div className='svv'>
       <HiArrowNarrowRight></HiArrowNarrowRight>
       </div> 
            <div className='svg-container'> 
            <TbTargetArrow></TbTargetArrow>
            <h2>Reach Your Fitness Goals</h2>
            <p> Open the app and navigate to the Goals section.
Set your fitness goals </p>
            </div> 
            </div>
            </div>
            </>
    )
}
export  default FooterCard