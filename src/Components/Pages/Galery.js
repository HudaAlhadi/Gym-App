import './Galery.css'
import Fit from '../../Assests/Fitness.jpg'
import SecondaryHeader from "../SecondaryHeader"
import { FaRunning } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { AiTwotoneTrophy } from "react-icons/ai";
import { SiSlideshare } from "react-icons/si";
import Card2 from '../UI/Card2';

const Galery=()=>{

    const contentArray = [
        {
          h2: "MAKE A DIFFERENCE",
          p: "Excite and inspire others. ‘Own it’ and be the best we can be.",
          icon: <FaRunning/> 
        },
        {
          h2: "STAND SHOULDER TO SHOULDER",
          p: "Collaborate and share with each other. Include everyone and embrace uniqueness.",
          icon: <SiSlideshare/>
        },
        {
          h2: "FOCUS ON THE DETAIL",
          p: "Care about the little things. Have determination and resilience to get the job done.",
          icon: <FaSearch/> 
        },
        {
          h2: "PLAY TO WIN",
          p: "Improve and innovate - never get complacent. Challenge ourselves and each other. Celebrate our success.",
          icon: <AiTwotoneTrophy/> 
        }
      ];
const galery=[]
for(let i=1; i<=6 ;i++){

galery.push(require(`../../Assests/test${i}.jpg`))
}


    return(
        <> 
        <div className='Gallery'>         <SecondaryHeader image={Fit} title= 'Our Gallery' >
        Explore our comprehensive Strength & Conditioning Zone, where members build muscle and improve their endurance.
            </SecondaryHeader>
<h2 className='gallery-section'> </h2>
            <section className='galery-container'> 
            <div className='image-container'> 
            {galery.map((img)=>{

return(
    <img src={img}/>
)
})}
            </div>
            </section>
            <div class="heading-container">
            <h1 className='sub-header'>AT Vaw<span>lines</span> WE</h1></div>
            <div className='content-container'> {contentArray.map((item)=>{
                return( <Card2> <li className='card'><span>{item.icon}</span><h2>{item.h2}</h2><p>{item.p}</p></li></Card2>) } )}</div>
         </div>
            </>
    )
}
export default Galery