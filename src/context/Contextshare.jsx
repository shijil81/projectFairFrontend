import React, { createContext, useState } from 'react'


export const addResponseContext=createContext({})
export const editResponseContext = createContext({})
export const isLoginAuthContext=createContext(false)

function Contextshare({children}) {
    //children- is predefined props to share data

    const [addResponse,setAddResponse]=useState({})
    const [editResponse,setEditResponse]=useState({})
    const [isLoginStatus,setIsLoginStatus]=useState(true)

  return (
    <>
       <addResponseContext.Provider value={{addResponse,setAddResponse}}> {/* provider tag to share that data- whare share data should placed inside value attribute as key:value pair */}
        <editResponseContext.Provider value={{editResponse,setEditResponse}}>
         <isLoginAuthContext.Provider value={{isLoginStatus,setIsLoginStatus}}> {children}
         </isLoginAuthContext.Provider>
          </editResponseContext.Provider>
        </addResponseContext.Provider>
    </>
  )
}

export default Contextshare
