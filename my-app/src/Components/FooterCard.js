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
           <p> hud dinfc jfcnfe fenf efjn efjenf ejfne fjenf efjnjer fjrnf rjfnr fjrng rjg rjgnr gjrng rgign rjgn rgjrng rjgn </p>
           </div> 
           <div className='svv'>
       <HiArrowNarrowRight></HiArrowNarrowRight>
       </div> 
           <div className='svg-container'> 
            <BsCheck2Circle> </BsCheck2Circle>
            <h2> Download the Mobile App</h2>
            <p> hud dinfc jfcnfe fenf efjn efjenf ejfne fjenf efjnjer fjrnf rjfnr fjrng rjg rjgnr gjrng rgign rjgn rgjrng rjgn </p>
            </div> 
            <div className='svv'>
       <HiArrowNarrowRight></HiArrowNarrowRight>
       </div> 
            <div className='svg-container'> 
            <TbTargetArrow></TbTargetArrow>
            <h2>Reach Your Fitness Goals</h2>
            <p> hud dinfc jfcnfe fenf efjn efjenf ejfne fjenf efjnjer fjrnf rjfnr fjrng rjg rjgnr gjrng rgign rjgn rgjrng rjgn </p>
            </div> 
            </div>
            </div>
            </>
    )
}
export  default FooterCard