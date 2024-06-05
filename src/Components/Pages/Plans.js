import './Plans.css'
import { plans } from './data'
import Cart from '../UI/Cart'
import download from '../../Assests/download.jpg'
import SecondaryHeader from '../SecondaryHeader'
const Plans=()=>{

    return(
<> 
<SecondaryHeader title= 'Our Plans' image={download}> 
Discover our amazing Plans
        </SecondaryHeader>
<div className='plans-container'> 

{plans.map( (item)  =>{

    return(
    
      
<Cart> 
    <div className='package-container' key={item.id}> 
        <h1> {item.name} </h1>
        <span> ${item.price}</span>
        <p> {item.desc}</p>
        <div> 
            {item.features.map((ite)=>{
return (
    <p className={!ite.available?'disable': ''}> {ite.feature}</p>
)
            })}
        
        </div>
        </div>
        </Cart> 
    )
}
)}


</div>
    

    </>   
    )
}

export default Plans