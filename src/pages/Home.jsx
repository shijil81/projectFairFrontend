import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import titleImg from '../assets/title 1.png'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'
import { homeProjectApi } from '../services/allApi'


function Home() {
  const [token,setToken]=useState("")
  const [homeProject,setHomeProject]=useState([])
  
  

  const gethomeProject=async()=>{
    const result = await homeProjectApi()
    setHomeProject(result.data)   
  }
  console.log(homeProject);
  

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
    }

    gethomeProject()

  },[])

 
  return (
    <>
      <div className="container-fluid bg-success p-4 mb-4" style={{width:'100%',height:'100vh'}} >
        <Row className='mt-5'>
          <Col md={6} className='d-flex justify-content-center align-items-center flex-column'>
            <div>
                <h1 className='text-light'>Project Fair</h1>
                <h6>One stop destination for all software development Project</h6>
              {!token? <Link to={'/login'}> <button className='btn btn-outline-light mt-4'>Get started <FontAwesomeIcon icon={faArrowRight} className='ms-2'/></button></Link> :
                <Link to={'/dashboard'}><button className='btn btn-outline-light mt-4'>Manage Project <FontAwesomeIcon icon={faArrowRight} className='ms-2'/></button></Link>}
            </div>
          </Col>
          <Col md={6} className='d-flex justify-content-center align-items-center flex-column'>
              <img src={titleImg} alt="no image" width={'75%'}/>
          </Col>
        </Row>
      </div>

      <div className="container-fluid">
        <h1 className='text-center my-5'>Explore Our Projects</h1>
        <div className="row mb-5">
          {homeProject?.length>0?
            homeProject?.map((item)=>(
              <div className="col-md-4 d-flex p-4 justify-content-center">
            <ProjectCard project={item}/>
          </div> 
            )):
            null
            }
        </div>
        <Link to={'/project'} className='text-primary'><h5 className='text-center my-5'>See More Project</h5></Link>
      </div>
    </>
  )
}

export default Home
