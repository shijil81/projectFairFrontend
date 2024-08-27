import React from 'react'
import { Link } from 'react-router-dom'

function PagenotFound() {
  return (
    <div style={{width:'100%',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>

        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 d-flex justify-content-center align-items-center flex-column">
                
        <img src="https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif" alt="404 Error" width={'100%'} />
        <h1 className='mt-2'>Look like you're lost</h1>
        <h4>The page you are looking is unavailable</h4>
        <Link to={'/'}><button className='btn btn-success mt-1 mb-4'>Back Home</button></Link>
            </div>
            <div className="col-md-2"></div>
        </div>

    </div>
  )
}

export default PagenotFound
