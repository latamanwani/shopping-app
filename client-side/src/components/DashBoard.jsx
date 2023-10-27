import React, { useEffect, useState } from 'react'
import ProductsList from './ProductsList';
import jwtDecode from "jwt-decode";

const DashBoard = () => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    console.log("sdsdsdsd", jwtDecode(localStorage.getItem('token')))
    setUser(jwtDecode(localStorage.getItem('token')))
  }, [])
  
  const handleLogout=()=>{
    localStorage.removeItem('token');
    window.location.reload()
  }
  return (
    <>
    <div className='dashboard'> 
     <h1>hello {user && user.firstName}</h1> 
     <button className='button'  style={{
            fontSize: '16px',     
            width: '100px',         
            height: '30px', 
            padding: '5px 10px',
          }} onClick={() => handleLogout()}>logout</button>
    </div>
    <div className="row mx-0">
      <div className="col-12">
        <ProductsList/>
      </div>
    </div>
    

 


    </>
  )
}

export default DashBoard