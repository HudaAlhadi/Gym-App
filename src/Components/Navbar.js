import './Navbar.css'
import {GiHamburgerMenu }from 'react-icons/gi'
import {GrClose} from 'react-icons/gr'
import { useState } from 'react'
import { NavLink} from 'react-router-dom'
const Navbar=()=>{
    const [nav, setNav]= useState(true)

    const handleshow=()=>{
      setNav(prev=> !prev)
    }
    return (
        <> 

<div className='wrapper '> 

<h2 className='logo'> Vaw<span>lines</span></h2>
<div className={`nav-list ${!nav? 'showclass':'closeclass'}`}> 
<ul>
   <li>  <NavLink to='/' className={({isActive})=> isActive? 'activeclass':''}>Home</NavLink></li>
   <NavLink to='/about'className={({isActive})=> isActive? 'activeclass':''} > <li>About</li></NavLink> 
   <li>  <NavLink to='/galery'className={({isActive})=> isActive? 'activeclass':''}>Galery</NavLink></li>
   <li>  <NavLink to='/plans'className={({isActive})=> isActive? 'activeclass':''}>Plans</NavLink></li>
   <li>  <NavLink to='/contact'className={({isActive})=> isActive? 'activeclass':''}>Contact</NavLink></li>
</ul>
</div>
{nav? <GiHamburgerMenu className='ham-icon' onClick={handleshow}></GiHamburgerMenu >: <GrClose className='ham-icon' onClick={handleshow}></GrClose> }


</div>

</> 
    )
   
}
export default Navbar