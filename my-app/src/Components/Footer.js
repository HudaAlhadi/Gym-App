import './Footer.css'
import {SlSocialFacebook, SlSocialTwitter} from 'react-icons/sl'
import {TiSocialLinkedin,TiSocialSkypeOutline} from 'react-icons/ti'
import {Link} from 'react-router-dom'
import FooterCard from './FooterCard'

const Footer= ()=>{

    return ( 
        <>
        <FooterCard></FooterCard>
        <footer className='Footer'>
            <div className='footer-wrapper'>
<article >
<h2> VAWU<span>Lines</span></h2>
<p> Contact Us:<br/> 

Address: 123 Fitness Street, Workout City, Fit Country
Phone: (123) 456-7890
Email: info@fitnesswebsite.com</p>
<div className='Social'> 
<TiSocialSkypeOutline/> 
<SlSocialTwitter/>
<TiSocialLinkedin ></TiSocialLinkedin> 
<SlSocialFacebook ></SlSocialFacebook>
</div>
</article>
<article>
<h4> Navigation</h4>
<ul> 
<Link to='/'> <li>  Home</li></Link>
<Link to='/about'> <li>  About us</li></Link>
<Link to='/'> <li>  Programs
</li></Link>
<Link to='/'> <li>  Schedule</li></Link>
</ul>
</article>
<article>
<h4> Quick Links</h4>
<ul> 
<Link to='/'> <li>  Membership</li></Link>
<Link to='/'> <li>  FAQs</li></Link>
<Link to='/'> <li>  Testimonials</li></Link>
<Link to='/'> <li>  Privacy Policy</li></Link>
</ul>
</article>
<article>
<h4> Social Media</h4>
<ul> 
<Link to='/'> <li> Facebook</li></Link>
<Link to='/'> <li>  Instagram</li></Link>
<Link to='/'> <li>  Twitter</li></Link>
<Link to='/'> <li> Youtube</li></Link>
</ul>
    
</article>
</div>
        </footer>
        </>
    )
}

export default Footer