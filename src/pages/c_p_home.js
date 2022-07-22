// import Sidebar from '../components/Sidebar'
import React, { Fragment } from 'react'
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import html2pdf from 'html2pdf.js';

import Navbar from '../components/Navbar';
import ButtonGroup from '../components/ButtonGroup';
import ApplyButton from '../components/ApplyButton';
import ShowMCQs from '../components/ShowMCQs';
import ShowQuestion from '../components/ShowQuestion';

const C_P_HOME = () => {
  const { heading } = useSelector(state => state.heading);


  function htmlToPdf () {
    var element = document.getElementById('paper');
    html2pdf(element);
  }


  return (
    <>
      <Navbar isContainerTrue={false} />
      <div className='grid grid-cols-12'>
        <div className="col-span-6 bg-slate-100 grid grid-cols-12 p-8 h-[83vh] items-baseline">
          <ButtonGroup />
          <Outlet />
        </div>
        <div className="col-span-6  h-[83vh] overflow-y-scroll" id='paper'>
          <div className="heading select-none">
            <h1 className='text-2xl text-center font-bold mt-8'>{heading}</h1>
          </div>
          <ShowMCQs />
          <ShowQuestion />
        </div>
        <div className='col-span-3 col-start-7'>
          <ApplyButton ON_CLICK={() => htmlToPdf()} isInputSubmit={false} btnText="Get Pdf" additionalClasses={""} />
        </div>
      </div>
    </>
  )
}

export default C_P_HOME;