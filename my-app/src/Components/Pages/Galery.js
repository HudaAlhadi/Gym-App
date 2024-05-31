import './Galery.css'
import OIP from '../../Assests/OIP.jpg'
import SecondaryHeader from "../SecondaryHeader"
const Galery=()=>{

const galeryLenght=6;
const galery=[]
for(let i=1; i<=galeryLenght ;i++){

galery.push(require(`../../Assests/test${i}.jpg`))
}


    return(
        <> 
        <SecondaryHeader image={OIP} title= 'Our Galery' >
            Hbs feh dehj je ehf uf jdcbe fhec hec hcb dhbc chbc hdcb hc h chbc hec ehbc eh h fbr f vrjb 
            </SecondaryHeader>

            <section className='galery-container'> 
            <div className='image-container'> 
            {galery.map((img)=>{

return(
    <img src={img}/>
)
})}
            </div>
            
            </section>
            </>
    )
}
export default Galery