// import Sidebar from '../components/Sidebar'
import React from 'react'
import Navbar from '../components/Navbar';
import ButtonGroup from '../components/ButtonGroup';
import MCQS from '../components/MCQ';
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';
const C_P_HOME = () => {
  const { heading } = useSelector(state => state.heading);
  return (
    <>
      <Navbar isContainerTrue={false} />
      <div className='grid grid-cols-12 '>
        <div className="col-span-6 bg-slate-100 grid grid-cols-12 p-8 h-screen items-baseline">
          <ButtonGroup />
          <Outlet />
        </div>
        <div className="col-span-6 bg-slate-200 h-screen overflow-y-scroll">
          <div className="heading select-none">
            <h1 className='text-2xl text-center font-bold mt-8'>{heading}</h1>
          </div>
        </div>

      </div>
    </>
  )
}

export default C_P_HOME;