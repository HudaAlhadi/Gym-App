import './NotFound.css'
import { Link } from 'react-router-dom'
const NotFound=()=>{

    return(
        <>

        <section className="Notfound-container">
            <div className="NotFound-wrapper">

<h1>Page Not Found </h1>
 <Link to='/'><button className="btn"> Click to return</button></Link>
                    </div>
        </section>
        </>
    )
}

export default NotFound