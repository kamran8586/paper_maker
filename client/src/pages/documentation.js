import React from 'react'
import Navbar from '../components/Navbar'

const documentation = () => {
  return (
    <>
      <Navbar isContainerTrue={false} />
      <div className="flex">
        <div className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r">
          <h2 className="text-3xl font-semibold text-center text-blue-800">Logo</h2>
          <div className="flex flex-col justify-between mt-6">
            <aside>
              <ul>
                <li>
                  <a className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md " href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="mx-4 font-medium">Dashboard</span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="mx-4 font-medium">Settings</span>
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        <div className="w-full h-full p-4 m-8 overflow-y-auto">
          <div className="flex items-center justify-center p-40 border-4 border-dotted">
            Content...
          </div>
        </div>
      </div>

    </>
  )
}

export default documentation