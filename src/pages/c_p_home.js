// import Sidebar from '../components/Sidebar'
import React from 'react'
import Navbar from '../components/Navbar';
import ButtonGroup from '../components/ButtonGroup';
import MCQS from '../components/MCQ';
import { Outlet } from 'react-router';
const c_p_home = () => {
  return (
    <>
      <Navbar isContainerTrue={false} />
      <div className='grid grid-cols-12 '>
        <div className="col-span-6 bg-slate-100 grid grid-cols-12 p-8 h-screen items-baseline">
          <ButtonGroup />
          <Outlet />
        </div>
        <div className="col-span-6 bg-slate-200 h-screen">

        </div>

      </div>
    </>
  )
}

export default c_p_home;