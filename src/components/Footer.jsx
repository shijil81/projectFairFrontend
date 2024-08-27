import { faStackOverflow,faFacebook,faInstagram,faTwitter,faWhatsapp,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
      <div className="container-fluid bg-success p-5">
        <div className="row">
            <div className="col-md-4">
                <h4><FontAwesomeIcon icon={faStackOverflow} className='me-2'/>Project Fair</h4>
                <p className='mt-3' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint soluta, magnam nostrum deleniti, ipsa exercitationem sed officiis nam id quidem at minus? Magni nobis nostrum quaerat autem error quam dolor!</p>
            </div>
            <div className="col-md-2 d-md-flex justify-content-center align-items-center flex-column">
                <div>
                    <h4 className='text-light'>Links</h4>
                    <Link to={'/'} style={{color:'black'}}><p className='mt-3'>Home</p></Link>
                   <Link to={'/project'} style={{color:'black'}}> <p>Project</p></Link>
                    <Link to={'/dashboard'}style={{color:'black'}}><p>DashBoard</p></Link>
                </div>
            </div>
            <div className="col-md-2 d-md-flex justify-content-center align-items-center flex-column">
            <div>
                    <h4 className='text-light'>Guids</h4>
                    <p className='mt-3'>React</p>
                    <p>Bootstrap</p>
                    <p>Bootswatch</p>
                </div>
            </div>
            <div className="col-md-4">
                <h4 className='text-light'>Contact Us</h4>
                <div className='d-flex mt-3'>
                    <input type="text" placeholder='email Id' className='form-control rounded-0' />
                    <button className='btn btn-warning rounded-0'>Subscribe</button>
                </div>
                <div className='d-flex mt-4 justify-content-between text-light'>
                <FontAwesomeIcon icon={faFacebook} className='fa-2x'/>
                <FontAwesomeIcon icon={faInstagram} className='fa-2x' />
                <FontAwesomeIcon icon={faTwitter} className='fa-2x'/>
                <FontAwesomeIcon icon={faWhatsapp} className='fa-2x'/>
                <FontAwesomeIcon icon={faLinkedin} className='fa-2x'/>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
