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
<h2> VAWU<span>Lies</span></h2>
<p> jje ejk fernfken  kenkfn kefkn ekfke fkkef kfdkefn efkfkn efkfk ekhfk kehkf ekfken ekfkfem fkef kfk efkhf fekfk efkfke efhk </p>
<div className='Social'> 
<TiSocialSkypeOutline/> 
<SlSocialTwitter/>
<TiSocialLinkedin ></TiSocialLinkedin> 
<SlSocialFacebook ></SlSocialFacebook>
</div>
</article>
<article>
<h4> Permanalities</h4>
<ul> 
<Link to='/'> <li>  About</li></Link>
<Link to='/'> <li>  About</li></Link>
<Link to='/'> <li>  About</li></Link>
<Link to='/'> <li>  About</li></Link>
</ul>
</article>
<article>
<h4> Permanalities</h4>
<ul> 
<Link to='/'> <li>  About</li></Link>
<Link to='/'> <li>  About</li></Link>
<Link to='/'> <li>  About</li></Link>
<Link to='/'> <li>  About</li></Link>
</ul>
</article>
<article>
<h4> Permanalities</h4>
<ul> 
<Link to='/'> <li>  About</li></Link>
<Link to='/'> <li>  About</li></Link>
<Link to='/'> <li>  About</li></Link>
<Link to='/'> <li>  About</li></Link>
</ul>
    
</article>
</div>
        </footer>
        </>
    )
}

export default Footer