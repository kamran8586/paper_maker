// import Sidebar from '../components/Sidebar'
import React, { Fragment } from 'react'
import { Outlet } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import html2pdf from 'html2pdf.js';
import Navbar from '../components/Navbar';
import ButtonGroup from '../components/ButtonGroup';
import MCQS from '../components/MCQ';

const C_P_HOME = () => {
  const { heading } = useSelector(state => state.heading);
  const { questions } = useSelector(state => state.question);
  const { mcqs } = useSelector(state => state.mcq);
  function htmlToPdf () {
    var element = document.getElementById('paper');
    html2pdf(element);
  }


  return (
    <>
      <Navbar isContainerTrue={false} />
      <div className='grid grid-cols-12 '>
        <div className="col-span-6 bg-slate-100 grid grid-cols-12 p-8 h-screen items-baseline">
          <ButtonGroup />
          <Outlet />
        </div>
        <div className="col-span-6  h-auto overflow-y-scroll" id='paper'>
          <div className="heading select-none">
            <h1 className='text-2xl text-center font-bold mt-8'>{heading}</h1>

          </div>
          <div className="mcqs">
            {mcqs.map((mcq, index) => (
              <Fragment key={uuidv4()}>
                <h2 className='text-md font-bold p-3'>{`${index + 1}. ${mcq.mcqText}`}</h2>
                <ol className='list-[alpha] flex gap-5'>
                  {
                    mcq.mcqs.map((mcqOption, index) => (
                      <Fragment key={uuidv4()}>
                        <li className='ml-16 text-sm'>{mcqOption}</li>
                      </Fragment>
                    ))
                  }</ol>
              </Fragment>
            ))}
          </div>
          <div className="questions p-8">
            {
              questions.map((q, index) => {
                return (
                  <Fragment key={uuidv4()}>
                    <h2 className='text-md font-semibold' key={uuidv4()}>Q:{(index + 2) + " " + q.heading}</h2>
                    <ol className='list-[lower-roman]' key={uuidv4()}>
                      {
                        q.questions.map((ques, index) => {
                          return (
                            <Fragment key={uuidv4()}>
                              <li className='text-xs ml-16' key={uuidv4()}>{ques}</li>
                            </Fragment>
                          )
                        })
                      }
                    </ol>
                  </Fragment>
                )
              })
            }
          </div>
        </div>
        <button onClick={() => { htmlToPdf() }}>Submit</button>
      </div>
    </>
  )
}

export default C_P_HOME;