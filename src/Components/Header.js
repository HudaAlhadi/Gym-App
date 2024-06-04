
import './Header.css'
import download from '../Assests/download.jpg'
import Fit from '../Assests/Fit4.jpg'
import Cart from './UI/Cart'
const Header=()=>{
    
    return( 
<>
<div className='Header'>
  
<img src={Fit}/> 
   
    <div className='section-left'> 
        <span>100DayOfWorkOut </span>
        <h1> Join the legend of fittness world</h1>
        <p> you can join us and dicover one of the mpst here are some<br></br> of thongs you an o when you are playing with us <br></br>in yhis very compettive world of achnces </p>
        <button className='get-button'> Get Started</button>
    </div>
   
</div>
</>
    )
}

export default Header