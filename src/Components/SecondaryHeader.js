import './SecondaryHeader.css'


const SecondaryHeader =({image, title,children})=>{


    return (<>

    <div className="Header-container"> 
    <div className='Header-wrapper'>
<div className='Image-container'> 
    <img src={image}/> 
</div>
<div className='Header-content'> 
    <h1>{title}</h1>
    <p> {children}</p>
    </div>
    </div>
    </div>
    </>)
}

export default SecondaryHeader