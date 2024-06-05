import Ad1 from '../Assests/Ad1.jpg'
import Ad2 from '../Assests/Ad2.jpg'
import Ad3 from '../Assests/Ad3.jpg'
import Ad4 from '../Assests/Ad4.jpg'
import './Ad.css'

const Ad=()=>{


    return(
        <> 
        <div className="Ad"> 
      <h2>WE WORK WITH SOME GREAT PEOPLE TO MAKE SURE WE<br/> PROVIDE THE VERY BEST EQUIPMENT AND <br/>
PRODUCTS IN OUR GYMS  </h2>
        <div className='img-container'> <img src={Ad1}/> <img src={Ad2}/><img src={Ad3}/><img src={Ad4}/></div>
            </div>
            </>
    )
}
export  default Ad