import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'
import { allProjectApi } from '../services/allApi'


function Project() {

  const [isToken,setIsToken]=useState("")
  const [allproject,setAllProject]=useState([])
  const [searchKey,setSerachKey]=useState("")

  const getAllProject=async(searchKey)=>{
    const result= await allProjectApi(searchKey)
    setAllProject(result.data)

  }

  console.log(allproject);

  useEffect(()=>{
    getAllProject(searchKey)
  },[searchKey])
  
  console.log(searchKey);
  


  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setIsToken(sessionStorage.getItem("token"))

    }
    

  },[])
  return (
    <>
    <Header/>
      <div className="container-fluid">
        <h1 className='text-center mt-5'>All Projects</h1>

{/* all projects when logged in */}
   {isToken?     <div>
          <div className="row my-4">
            <div className="col-md-4"></div>
            <div className="col-md-4 d-flex">
              <input type="text"className='form-control' placeholder='Technologies' onChange={(e)=>setSerachKey(e.target.value)} />
              <FontAwesomeIcon icon={faMagnifyingGlass} rotation={90} style={{marginTop:'12px',marginLeft:'-30px', color:'lightgray'}}/>
            </div>
            <div className="col-md-4"></div>
          </div>
  
          <div className="row my-4">
            {allproject?.length>0?
              allproject?.map((item)=>(
                <div className="col-md-4 p-4">
              <ProjectCard project={item}/>
            </div>

              ))
              
            :
            <p className='text-danger ms-5'>No Project to show</p>
            
            }
           
          </div>
        </div>

        :
        <div className='mt-5 w-100 row'>

          <div className="col-md-4"></div>
          <div className="col-md-4 p-4 d-flex justify-content-center align-items-center flex-column">
            <img src="https://cdn.pixabay.com/animation/2023/06/13/15/12/15-12-30-710_512.gif" alt="no image" width={'80%'} height={'300px'}/>

            <h4 className='mt-5 text-center'>Please <Link to={'/login'}>Login</Link> to Explore More Project</h4>
          </div>
          <div className="col-md-4"></div>

        </div>}


      </div>
    </>
  )
}

export default Project
