import Sidebar from '../components/Sidebar'
import React from 'react'
import Navbar from '../components/Navbar';
const c_p_home = () => {
  return (
    <>
      <Navbar isContainerTrue={false}/>
      <div className='grid grid-cols-12 '>
        <Sidebar />
      </div>
    </>
  )
}

export default c_p_home;